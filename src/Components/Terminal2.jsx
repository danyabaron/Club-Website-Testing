import React, { useState, useEffect, useRef } from 'react';

const styles = {
  body: {
    overflow: 'hidden',
    backgroundColor: 'white',
    color: 'white',
    fontFamily: 'Arial, sans-serif',
    margin: 0,
    padding: 0,
    textAlign: 'center',
  },
  puzzleContainer: {
    backgroundColor: 'black',
    color: 'lime',
    fontFamily: 'monospace',
    padding: '20px',
    width: '80%',
    maxWidth: '600px',
    borderRadius: '5px',
    margin: 'auto',
  },
  terminal: {
    width: '96%',
    height: '300px',
    border: '1px solid lime',
    padding: '10px',
    overflowY: 'scroll', // Allow scrolling
    backgroundColor: 'black',
    textAlign: 'left',
    fontFamily: 'monospace',
    fontWeight: 'normal',
    position: 'relative',
    // Hide the scrollbar
    scrollbarWidth: 'none', // Firefox
    '-ms-overflow-style': 'none', // Internet Explorer 10+
    // Webkit Browsers (Chrome, Safari)
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    '&::-webkit-scrollbar-thumb': {
      display: 'none',
    },
    '&::-webkit-scrollbar-track': {
      display: 'none',
    },
  },
  inputContainer: {
    position: 'relative',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    marginTop: '10px',
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
};

const Terminal2 = () => {
  const [input, setInput] = useState('');
  const [terminalOutput, setTerminalOutput] = useState([
    'system19@ubuntu1873: Enter MemberID_Session Key (If Applicable)',
  ]);
  const [username, setUsername] = useState('unregistereduser'); // Track the username
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track if user is logged in
  const inputRef = useRef(null);
  const cursorRef = useRef(null);

  const getTextWidth = (text) => {
    const span = document.createElement('span');
    span.style.visibility = 'hidden';
    span.style.whiteSpace = 'pre';
    span.style.fontFamily = 'monospace';
    span.style.fontSize = '14px';
    span.textContent = text;
    document.body.appendChild(span);
    const width = span.offsetWidth;
    document.body.removeChild(span);
    return width;
  };

  const updateCursorPosition = () => {
    const promptText = `c:\\${username}\\:`; // Use the updated username
    const promptWidth = getTextWidth(promptText);
    const inputTextWidth = getTextWidth(input);

    if (inputRef.current && cursorRef.current) {
      const inputRect = inputRef.current.getBoundingClientRect();
      const containerRect = inputRef.current.parentElement.getBoundingClientRect();
      const topOffset = inputRect.top - containerRect.top + (inputRect.height / 2) - 8;

      // Adjust the cursor position
      cursorRef.current.style.left = `${promptWidth + inputTextWidth - 9}px`;
      cursorRef.current.style.top = `${topOffset}px`;
    }
  };

  useEffect(() => {
    // Scroll to the bottom of the terminal when output changes
    const terminal = document.getElementById('terminal');
    if (terminal) {
      terminal.scrollTop = terminal.scrollHeight;
    }
  }, [terminalOutput]); // Trigger when terminal output changes
  
  useEffect(() => {
    updateCursorPosition();
  }, [input, username]); // Recalculate cursor position when input or username changes

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      processCommand(input);
      setInput(''); // Clear the input after command is processed
    }
  };

  const processCommand = (command) => {
    let newTerminalOutput = [...terminalOutput]; // Initialize new terminal output

  // Add 4 spaces (simulating one tab) before the caret for user input
  newTerminalOutput.push(`    >900576234_432899: ${command}`);  // Adds 4 spaces before the caret


    if (command === '900576234_432899') {
      // Change the username when the command is entered
      setUsername('900576234_432899');
      newTerminalOutput.push(`system19@ubuntu1873: MemberID_SessionKey: ${command}`);
      setTimeout(() => {
        newTerminalOutput.push('system19@ubuntu1873: Session Resumed From 4/4/2024, User: avalegro3 system19@ubuntu1873: Show History? y/n');
        setTerminalOutput([...newTerminalOutput]);
        setIsLoggedIn(true); // Mark the user as logged in
      }, 1000);
    } else if (isLoggedIn && command === 'y') {
      // Show history if the user is logged in
      newTerminalOutput.push(`[4/Apr/2024:11:02:34] avalegro3 logged in with session key 432899`);
      newTerminalOutput.push(`[4/Apr/2024:11:15:53] avalegro3 entered command dig 132.448.1.2`);
      newTerminalOutput.push(`[4/Apr/2024:11:17:24] avalegro3 disconnected from server`);
      setTerminalOutput([...newTerminalOutput]);
    } else if (isLoggedIn && command === 'dig 132.448.1.2') {
      // Original output for dig command
      newTerminalOutput.push(`<<>> DiG 9.10.6 <<>> 132.448.1.2`);
      newTerminalOutput.push(`global options: +cmd`);
      newTerminalOutput.push(`Got answer:`);
      newTerminalOutput.push(`->>HEADER<<- opcode: QUERY, status: NOERROR, id: 12345`);
      newTerminalOutput.push(`flags: qr rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 0`);
      newTerminalOutput.push(`QUESTION SECTION:`);
      newTerminalOutput.push(`132.448.1.2.             IN      A`);
      newTerminalOutput.push(`ANSWER SECTION:`);
      newTerminalOutput.push(`132.448.1.2.      86400   IN      A       192.168.1.10`);
      newTerminalOutput.push(`Query time: 12 msec`);
      newTerminalOutput.push(`SERVER: 176.341.7.9`);
      newTerminalOutput.push(`WHEN: Mon Apr 4 11:17:24 UTC 2024`);
      newTerminalOutput.push(`MSG SIZE  rcvd: 56`);
      setTerminalOutput([...newTerminalOutput]);


     } else if (isLoggedIn && command === 'whois 176.341.7.9') {
        newTerminalOutput.push(`system19@ubuntu1873: Registrar URL: http://www.dracocybersolutions.com`);
        newTerminalOutput.push(`system19@ubuntu1873: Registrant Organization: Draco CS LLC`);
        newTerminalOutput.push(`system19@ubuntu1873: Registrant State/Province: Esmeralda Bank`);
        newTerminalOutput.push(`system19@ubuntu1873: Registrant Country: Commonwealth of the Northern Mariana Islands (CNMI)`);
        newTerminalOutput.push(`system19@ubuntu1873: Registrant Email: Unknown`);
        newTerminalOutput.push(`system19@ubuntu1873: Tech Email:Unknown`);
        newTerminalOutput.push(`system19@ubuntu1873: Web Server 1: 134.556.2.1`);
        setTerminalOutput([...newTerminalOutput]);

  

      } else if (isLoggedIn && command === 'nslookup 134.556.2.1') {
        newTerminalOutput.push(`system19@ubuntu1873: Server Name: dellnetshelter.bho.ll.com`);
        newTerminalOutput.push(`system19@ubuntu1873: Name Server 1: 134.556.2.1`);
        newTerminalOutput.push(`system19@ubuntu1873: Name Server 2: 134.553.2.6`);
        setTerminalOutput([...newTerminalOutput]);

      }
    
  // Step 1: Initialize a state to track if the curl command was executed
let curlExecuted = false;

// Step 2: Handle the curl command execution
if (isLoggedIn && command === 'curl -I --dns-servers 134.556.2.1,134.553.2.6 https://www.dracocybersolutions.com') {
  newTerminalOutput.push(`system19@ubuntu1873: System is Protected With Cloudflare, disable? y/n`);
  setTerminalOutput([...newTerminalOutput]);

  // Set the curlExecuted flag to true after the curl command
  curlExecuted = true;
}

// Step 3: Handle the user input for 'y' or 'n'
else if (isLoggedIn && curlExecuted && command === 'y') {
  newTerminalOutput.push(`system19@ubuntu1873: Disabling protection...`);
  setTerminalOutput([...newTerminalOutput]);

  // You can add any additional functionality here for what happens when the user enters 'y'
  curlExecuted = false; // Reset the flag or handle further logic
}

else if (isLoggedIn && curlExecuted && command === 'n') {
  newTerminalOutput.push(`system19@ubuntu1873: Keeping Cloudflare protection enabled.`);
  setTerminalOutput([...newTerminalOutput]);

  // Reset the flag or handle further logic
  curlExecuted = false;
}
      
// Handle unrecognized commands
else {
  newTerminalOutput.push(`$ ${command}: command not found`);
  setTerminalOutput(newTerminalOutput);
}
}
      
  return (
    <div style={styles.body}>
      <div style={styles.puzzleContainer}>
        <div style={styles.terminal} id="terminal">
          {terminalOutput.map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </div>

        <div style={styles.inputContainer}>
          <span className="remote-user">c:\{username}\:</span> {/* Display updated username */}
          <input
            id="input"
            ref={inputRef}
            style={styles.input}
            type="text"
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <div ref={cursorRef} style={styles.cursor}>_</div>
        </div>
      </div>
    </div>
  );
};

export default Terminal2;
