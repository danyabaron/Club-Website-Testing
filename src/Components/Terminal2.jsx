import React, { useState, useEffect, useRef } from 'react';

const styles = {
  body: {
    overflow: 'hidden',
    backgroundColor: 'black',
    color: 'black',
    fontFamily: 'Arial, sans-serif',
    margin: 0,
    padding: 0,
    textAlign: 'center',
  },
  puzzleContainer: {
    backgroundColor: 'black',
    color: 'lime',
    fontFamily: 'monospace',
    padding: '0',  // Reduced padding for a smaller container
    width: '400px',   // Fixed width for a smaller container
    height: '400px',  // Fixed height
    borderRadius: '0px',  // Rounded corners
    margin: 'auto',
    boxShadow: '0px 0px 15px rgba(0, 255, 0, 0.6)',  // Optional shadow for more emphasis
  },
  terminal: {
    width: '100%',  // Full width within the puzzle container
    height: '90%',  // 70% of the container's height
    border: '1px solid lime',
    padding: '10px',
    overflowY: 'scroll',
    backgroundColor: 'black',
    textAlign: 'left',
    fontFamily: 'monospace',
    fontWeight: 'normal',
    position: 'relative',
    borderRadius: '10px',  // Rounded corners for the terminal
  },
  inputContainer: {
    position: 'relative',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    marginTop: '10px',
    fontFamily: 'monospace',
    color: 'yellow',
  },
  input: {
    background: 'black',
    color: 'yellow',
    border: 'none',
    width: '100%',
    fontFamily: 'monospace',
    fontSize: '14px',
    outline: 'none',
    caretColor: 'transparent',
    paddingLeft: 0,
    lineHeight: '20px',
    fontWeight: 'normal',
  },
  cursor: {
    position: 'absolute',
    fontFamily: 'monospace',
    fontSize: '14px',
    fontWeight: 'bold',
    color: 'white',
  },
  hiddenText: {
    position: 'absolute',
    visibility: 'hidden',
    whiteSpace: 'pre',
    fontFamily: 'monospace',
    fontSize: '14px',
    paddingLeft: '0px',
  },
};

const Terminal2 = () => {
  const [input, setInput] = useState('');
  const [terminalOutput, setTerminalOutput] = useState([
    'system19@ubuntu1873: Enter MemberID_Session Key (If Applicable)',
  ]);
  const [username, setUsername] = useState('unregistereduser');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [RanDig, setRanDig] = useState(false);
  const [RanWhoIs, setRanWhoIs] = useState(false);
  const [RanNSLookup, setRanNSLookup] = useState(false);
  const [Port8080Open, setPort8080Open] = useState(false);

  const [curlExecuted, setCurlExecuted] = useState(false);
  const [cloudflareEnabled, setCloudflareEnabled] = useState(true);
  const [cloudflareJustDisabled, setCloudflareJustDisabled] = useState(false);
  const [showPDF, setShowPDF] = useState(false);
  const inputRef = useRef(null);
  const textMeasureRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    const terminal = document.getElementById('terminal');
    if (terminal) {
      terminal.scrollTop = terminal.scrollHeight;
    }
  }, [terminalOutput]);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  useEffect(() => {
    // Move cursor to measured text length + 9px offset
    if (textMeasureRef.current && cursorRef.current) {
      const width = textMeasureRef.current.offsetWidth;
      cursorRef.current.style.left = `${width + 150}px`;  // Fixed string interpolation
    }
  }, [input]);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      processCommand(input.trim());
      setInput('');
    }
  };

  const processCommand = (command) => {
    let newTerminalOutput = [...terminalOutput];
    newTerminalOutput.push(`    >900576234_432899: ${command}`);  // Fixed string interpolation

    // Step 1: Login
    if (command === '900576234_432899') {
      setUsername('900576234_432899');
      newTerminalOutput.push(`system19@ubuntu1873: MemberID_SessionKey: ${command}`);
      setTimeout(() => {
        setTerminalOutput([
          ...newTerminalOutput,
          'system19@ubuntu1873: Session Resumed From 4/4/2024, User: avalegro3 system19@ubuntu1873: Show History? y/n',
        ]);
        setIsLoggedIn(true);
      }, 1000);
    } else if (isLoggedIn && cloudflareJustDisabled && command === 'y') {
      newTerminalOutput.push(
        'system19@ubuntu1873: Cloudflare Disabled. Web Server Returned Unknown Error 470'
      );
      setTerminalOutput(newTerminalOutput);
      setShowPDF(true);

    // Step 2: Show Alex's History
    } else if (isLoggedIn && command === 'y' && !curlExecuted) {
      newTerminalOutput.push(
        '[4/Apr/2024:11:02:34] avalegro3 logged in with session key 432899'
      );
      newTerminalOutput.push(
        '[4/Apr/2024:11:15:53] avalegro3 entered command dig 132.448.1.2'
      );
      newTerminalOutput.push('[4/Apr/2024:11:17:24] avalegro3 disconnected from server');
      setTerminalOutput(newTerminalOutput);

    // Step 3: Enter Alex's Last Command Dig
    } else if (isLoggedIn && command === 'dig 132.448.1.2') {
      newTerminalOutput.push('<<>> DiG 9.10.6 <<>> 132.448.1.2');
      newTerminalOutput.push('global options: +cmd');
      newTerminalOutput.push('Got answer:');
      newTerminalOutput.push('->>HEADER<<- opcode: QUERY, status: NOERROR, id: 12345');
      newTerminalOutput.push(
        'flags: qr rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 0'
      );
      newTerminalOutput.push('QUESTION SECTION:');
      newTerminalOutput.push('132.448.1.2.             IN      A');
      newTerminalOutput.push('ANSWER SECTION:');
      newTerminalOutput.push('132.448.1.2.      86400');
      newTerminalOutput.push('Query time: 12 msec');
      newTerminalOutput.push('SERVER: 176.341.7.9');
      newTerminalOutput.push('WHEN: Mon Apr 4 11:17:24 UTC 2024');
      newTerminalOutput.push('MSG SIZE  rcvd: 56');
      setTerminalOutput(newTerminalOutput);
      setRanDig(true);

    // Step 4 Run a WhoIs Check on the Server IP Address Uncovered From Dig
    } else if (isLoggedIn && RanDig === true && command === 'whois 176.341.7.9') {
      newTerminalOutput.push('system19@ubuntu1873: Registrar URL: http://www.dracocybersolutions.com');
      newTerminalOutput.push('system19@ubuntu1873: Registrant Organization: Draco CS LLC');
      newTerminalOutput.push('system19@ubuntu1873: Registrant State/Province: Esmeralda Bank');
      newTerminalOutput.push('system19@ubuntu1873: Registrant Country: CNMI');
      newTerminalOutput.push('system19@ubuntu1873: Registrant Email: Unknown');
      newTerminalOutput.push('system19@ubuntu1873: Tech Email: Unknown');
      newTerminalOutput.push('system19@ubuntu1873: Web Server 1: 134.556.2.1');
      setTerminalOutput(newTerminalOutput);
      setRanWhoIs(true);

    // Step 5: Run a Name System Lookup to Check Who Web Server 1 Is
    } else if (isLoggedIn && RanDig === true && RanWhoIs === true && command === 'nslookup 134.556.2.1') {
      newTerminalOutput.push('system19@ubuntu1873: Server Name: dellnetshelter.bho.ll.com');
      newTerminalOutput.push('system19@ubuntu1873: Name Server 1: 134.556.2.1');
      newTerminalOutput.push('system19@ubuntu1873: Name Server 2: 134.553.2.6');
      setTerminalOutput(newTerminalOutput);
      setRanNSLookup(true);

    // Step 6: Now We Know Both DNS Servers and the Domain, So Combine Them in a Curl Command
    } else if (isLoggedIn && RanDig === true && RanWhoIs === true && RanNSLookup === true && command === 'curl -I --dns-servers 134.556.2.1,134.553.2.6 https://www.dracocybersolutions.com') {
      newTerminalOutput.push(
        'system19@ubuntu1873: System is Protected With Cloudflare, disable? y/n'
      );
      setTerminalOutput(newTerminalOutput);
      setCurlExecuted(true);

    // Step 7: Once Logged in and Curl Is Run, We'll See That Cloudflare is Active
    } else if (isLoggedIn && RanDig === true && RanWhoIs === true && RanNSLookup === true && curlExecuted === true && command === 'y' && cloudflareEnabled) {
      newTerminalOutput.push('system19@ubuntu1873: Disabling protection...');
      newTerminalOutput.push('system19@ubuntu1873: Cloudflare Disabled.');
      newTerminalOutput.push('system19@ubuntu1873: Cloudflare Error 0x7000: Page Data Exposed. Type | and Press Enter for More.');
      setTerminalOutput(newTerminalOutput);
      setCloudflareEnabled(false);
      setCurlExecuted(false);
      setCloudflareJustDisabled(true);
      setTimeout(() => {
        setCloudflareJustDisabled(false);
      }, 9000);
    
// Step 8: User Enters Pipe And Page Changes
}  else  if (isLoggedIn && cloudflareJustDisabled && command === '|') {
     // Display the message instructing the user to press 'd' for more
    newTerminalOutput.push('system19@ubuntu1873: Cloudflare Error 0x7000: Page Data Exposed. Press D to Inspect');
  setTerminalOutput(newTerminalOutput);
}

// Step 8: User Presses 'D' to Open the PDF
else if (isLoggedIn && cloudflareJustDisabled && command === 'd') {
  // Open the PDF file in a new tab
  window.open('/Python101&RemoteAccess.py.pdf', '_blank');
}
    
    // Step 9: Now Cloudflare is Disabled, The Player Can Run Netstat to See Open and Closed Ports
    else if (isLoggedIn && RanDig === true && RanWhoIs === true && RanNSLookup === true && command === 'netstat -a') {
      newTerminalOutput.push('Proto  Local Address               Foreign Address               State');
      newTerminalOutput.push('68  TCP    0.0.0.0:500             900576234_432899             LISTENING');
      newTerminalOutput.push('69  TCP    132.448.1.2:22          dracocs                      LISTENING');
      newTerminalOutput.push('70  TCP    132.448.1.2:8080        dracoremote                  CLOSED');
      setTerminalOutput(newTerminalOutput);
    }

    // Step 10: User Enters Command to Open the Closed Port (8080)
    else if (isLoggedIn && RanDig === true && RanWhoIs === true && RanNSLookup === true && command === 'netsh advfirewall firewall add rule name="Open Port 8080" dir=in action=allow protocol=TCP localport=8080') {
      newTerminalOutput.push('system76@ubuntu1976: Port 8080 Opened.');
      setTerminalOutput(newTerminalOutput);
      setPort8080Open(true);
    }

    // Step 11: User Injects a Known Vulnerability into the Port and Exposes Where Traffic is Flowing-From the Front End Page to a New Hidden Back End
    else if (isLoggedIn && RanDig === true && RanWhoIs === true && RanNSLookup === true && Port8080Open === true && command === 'use /windows/smb/ms17_010_eternalblue --target Port:8080') {
      newTerminalOutput.push('system76@ubuntu1976: SMBv1 Disabled on Port 8080. Currently Forwarding TCP/UDP Traffic to: https://www.dracoremote14414292.rf.gd');
      setTerminalOutput(newTerminalOutput);
    }
  };
  return (
    <div style={styles.body}>
      <style>
        {`
          #terminal::-webkit-scrollbar { display: none; }
          #terminal { -ms-overflow-style: none; scrollbar-width: none; }

          @keyframes glitch {
            0% { transform: translate(0, 0) skew(0deg, 0deg); filter: none; }
            20% { transform: translate(-1px, 1px) skew(1deg, -1deg); filter: blur(1px) brightness(1.2); }
            40% { transform: translate(1px, -1px) skew(-1deg, 1deg); filter: contrast(1.2) brightness(0.9); }
            60% { transform: translate(-2px, 2px) skew(0.5deg, -0.5deg); filter: blur(1px) brightness(1.3); }
            80% { transform: translate(2px, -2px) skew(-0.5deg, 0.5deg); filter: contrast(1.3); }
            100% { transform: translate(0, 0) skew(0deg, 0deg); filter: none; }
          }

          .glitch {
            animation: glitch 0.2s infinite;
          }
        `}
      </style>
      <div style={styles.puzzleContainer}>
        <div
          style={styles.terminal}
          id="terminal"
          className={cloudflareJustDisabled ? 'glitch' : ''}
        >
          {terminalOutput.map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </div>
        {showPDF && (
          <div style={{ marginTop: '20px' }}>
            <iframe
              src="/Terminal2Instructions.cs.pdf"
              width="100%"
              height="600px"
              title="Cloudflare Error PDF"
              style={{ border: '2px solid lime' }}
            ></iframe>
          </div>
        )}
        <div style={styles.inputContainer}>
          <span className="remote-user">c:\{username}\:</span>
          <span style={styles.hiddenText} ref={textMeasureRef}>
            {input}
          </span>
          <input
            id="input"
            ref={inputRef}
            style={styles.input}
            type="text"
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <div ref={cursorRef} style={{ ...styles.cursor, top: '4px' }}>
            _
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal2;
