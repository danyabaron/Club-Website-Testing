import { useState, useEffect, useRef } from 'react';
import MembersOnly from './MembersOnly';
//do you like spaghetti? Because I made a lot of it
function Terminal() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([]);
  const inputRef = useRef(null);
  const outputRef = useRef(null); // Add this new ref for the output container
  const [path, setPath] = useState('c:\\dracosq\\users\\local');
  const [isConisInstalled, setIsConisInstalled] = useState(false);
  const [installing, setInstalling] = useState(false);
  const [installStep, setInstallStep] = useState(0);

  const [version, setVersion] = useState('1.2.81');
  const [access, setAccess] = useState(0);

  const [terminalState, setTerminalState] = useState('default');
  const [vpnConnection, setvpnConnection] = useState(false);

  const [textWidth, setTextWidth] = useState(0);
  const textRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  //auto-scroll effect
  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [output]);

  // Add this effect to measure text width whenever input changes
  useEffect(() => {
    if (textRef.current) {
      setTextWidth(textRef.current.offsetWidth);
    }
  }, [input]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };


  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (installing) {
        handleInstallInput(input);
      } else {
        processCommand(input);
      }
      setInput('');
    }
  };


  const handleInstallInput = (input) => {

    if (installStep === 1) {
      if (input.toLowerCase() === 'y') {
        if (terminalState === 'loggedIn') {
          // Handle the case when the user is logged in
          setOutput((prev) => [...prev, 'Updating Conis...']);
          setTimeout(() => {
            setOutput((prev) => [...prev, 'Conis version 3.6.15 installed.']);
          }, 2000);
          setVersion('3.6.15');
          setInstallStep(0);
          setInstalling(false);
        } else {
          setOutput((prev) => [...prev, 'Adding invitation.py to the directory...', 'Installing additional dependencies...']);
          setInstallStep(2);
          setTimeout(() => {
            setOutput((prev) => [...prev, 'Finalizing installation...', 'Configuring network protocols...', 'Registering system variables...', 'Conis installed successfully.', 'Type "python3 invitation.py" to run the script.']);
            setIsConisInstalled(true);
            setInstalling(false);
            setInstallStep(0);
          }, 4000);
        }
      } else if (input.toLowerCase() === 'n') {
        if (terminalState === 'loggedIn') {
          setOutput((prev) => [...prev, 'Canceled update.']);
          setInstallStep(0);
          setInstalling(false);

        } else {
          setOutput((prev) => [...prev, 'Installation canceled. Conis uninstalled.']);
          setInstalling(false);
          setInstallStep(0);

          const uninstallSteps = [
            'Uninstalling components... [0/16]',
            'Uninstalling components... [1/16]',
            'Uninstalling components... [2/16]',
            'Uninstalling components... [3/16]',
            'Uninstalling components... [4/16]',
            'Uninstalling components... [5/16]',
            'Uninstalling components... [6/16]',
            'Uninstalling components... [7/16]',
            'Uninstalling components... [8/16]',
            'Uninstalling components... [9/16]',
            'Uninstalling components... [10/16]',
            'Uninstalling components... [11/16]',
            'Uninstalling components... [12/16]',
            'Uninstalling components... [13/16]',
            'Uninstalling components... [14/16]',
            'Uninstalling components... [15/16]',
            'Uninstalling components... [16/16]',
            'Removing core files...',
            'Deregistering system components...'
          ];

          let step = 0;
          const interval = setInterval(() => {
            setOutput((prev) => [...prev, uninstallSteps[step]]);
            step++;
            if (step === uninstallSteps.length) {
              clearInterval(interval);
              setOutput((prev) => [...prev, 'Conis uninstalled successfully.']);
            }
          }, 250);
        }
      } else {
        setOutput((prev) => [...prev, 'Invalid input. Please enter y or n.']);
      }
    }
  };
  const requestMediaAccess = async (mediaType) => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ [mediaType]: true });
      setOutput((prev) => [...prev, `${mediaType.charAt(0).toUpperCase() + mediaType.slice(1)} access granted.`]);
      stream.getTracks().forEach(track => track.stop()); // Stop the stream after use
    } catch (error) {
      setOutput((prev) => [...prev, `${mediaType.charAt(0).toUpperCase() + mediaType.slice(1)} access denied.`]);
    }
  };


  const promptForUsername = async () => {
    for (let i = 0; i < 16; i++) {
      setOutput((prev) => [...prev, 'Welcome to Draconis Squamae!']);
      await new Promise(resolve => setTimeout(resolve, 1000 / (i + 1)));
    }
    setOutput([]);
    setOutput((prev) => [...prev, 'Please enter your Conis user name:']);
    setTerminalState('username');
  };
  const AccessLevelTwo = async () => {
    setOutput((prev) => [...prev, `${path}: conis *`, 'system76@ubuntu1976: Access Level 2 Activated. Local site changes.']);
    //get access to danya's site 

    setAccess(1);

  }

  const installation = async () => {
    setOutput([]);
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      await requestMediaAccess('audio');
      await new Promise(resolve => setTimeout(resolve, 1000));
      await requestMediaAccess('video');
      await new Promise(resolve => setTimeout(resolve, 1000));
      await promptForUsername();
    } else {
      setOutput((prev) => [...prev, 'Microphone access is not supported by your browser.']);
      await new Promise(resolve => setTimeout(resolve, 1000));
      await requestMediaAccess('video');
      await new Promise(resolve => setTimeout(resolve, 1000));
      await promptForUsername();
    }
  };
  const versionSearch = async () => {
    setOutput((prev) => [...prev, 'system76@ubuntu1976: Searching for updates...']);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setOutput((prev) => [...prev, 'system76@ubuntu1976: Update found.']);
    await new Promise(resolve => setTimeout(resolve, 500));
    setOutput((prev) => [...prev, 'system76@ubuntu1976: Install update? (y/n)']);
    setInstalling(true);
    setInstallStep(1);
  };
  const processCommand = (command) => {

  // This Part Allows User to Return to the Terminal With the New Script Required to Navigate to Level 3
    if (command === 'sudo ./chmod_elevate_and_expose.sh <protected_resource_file>') {
      setOutput((prev) => [
        ...prev,
        'System Database Failure Error Code 0x0009: Enter "Logcheck" For Details',
      ]);
      // After showing the error, process the next commands
      return; // Early return to prevent further actions, but we want to process subsequent commands (Logcheck and Navigate)
    }

    if (command === 'Logcheck') {
      setOutput((prev) => [
        ...prev,
        'Cloudflare Site Protection Detected a Vulnerability at /Redzone3, Patching.....',
      ]);
      setOutput((prev) => [
        ...prev,
        'Unable to Patch. Enter "Navigate Redzone3" to Verify Site Status',
      ]);
      return; // Returning to prevent further processing for this command
    }
  
    if (command === 'Navigate Redzone3') {
      setOutput((prev) => [
        ...prev,
        'Navigating...',
      ]);
      setTimeout(() => {
        window.location.href = '/level3'; // Redirect to the desired location
      }, 1000); // Delay for realism
      return; // Returning to prevent further processing for this command
    }

    if (terminalState === 'username') {
      const hasExactly4Letters = /^(?=(?:.*[a-zA-Z]){4})(?!(?:.*[a-zA-Z]){5,}).*$/.test(command);
      const hasExactly4Numbers = /^(?=(?:.*\d){4})(?!(?:.*\d){5,}).*$/.test(command);
      const hasOnlyLettersAndNumbers = /^[a-zA-Z0-9]+$/.test(command);
      const isExactly8Chars = command.length === 8;
  
      if (hasExactly4Letters && hasExactly4Numbers && hasOnlyLettersAndNumbers && isExactly8Chars) {
        setOutput((prev) => [...prev, `Username ${command} accepted.`]);
        setPath(`c:\\dracosq\\local\\${command}`);
        setOutput((prev) => [...prev, `Access to commands granted. Welcome, ${command}.`]);
        setTerminalState('loggedIn');
      } else {
        setOutput((prev) => [...prev, 'Invalid username. Please enter a valid Conis user name (4 letters and 4 numbers):']);
      }
      return; // Early return after processing username
    }
  
    // Now process other commands when the user is logged in
    if (terminalState === 'loggedIn') {
      switch (command.toLowerCase()) {
        case 'help':
          setOutput((prev) => [...prev, `${path}: ${command}`, 'system76@ubuntu1976: Available commands:', 'Blocked']);
          break;
        case 'conis -v':
          setOutput((prev) => [...prev, `${path}: ${command}`, 'system76@ubuntu1976: Conis version ' + version]);
          break;
        case 'thank you':
          setOutput((prev) => [...prev, `${path}: ${command}`, 'You are very welcome.']);
          break;
        case 'conis -u':
          versionSearch();
          break;
        case 'conis -l':
          setOutput((prev) => [...prev, `${path}: ${command}`, 'system76@ubuntu1976: Login Status: Logged In, Access Level: ' + access]);
          break;
        case 'conis -x':
          setOutput((prev) => [...prev, `${path}: ${command}`, 'system76@ubuntu1976: Logging out...']);
          setTimeout(() => {
            setOutput((prev) => [...prev, 'Type "python3 invitation.py" to run the login script.']);
          }, 1000);
          setTerminalState('default');
          break;
        case 'conis *':
          if (version === '3.6.15') {
            AccessLevelTwo();
          } else {
            setOutput((prev) => [...prev, `${path}: ${command}`, 'system76@ubuntu1976: Unknown Command.']);
          }
          break;
        case 'exit':
          setOutput((prev) => [...prev, `${path}: ${command}`, 'system76@ubuntu1976: Terminal session ended.']);
          window.location.reload();
          break;
        default:
          // Handle commands that are blocked or not found
          if (command.toLowerCase().startsWith('pip install ')) {
            setOutput((prev) => [...prev, `${path}: ${command}`, 'system76@ubuntu1976: Blocked. Limited installs allowed.']);
          } else if (command.toLowerCase().startsWith('cd')) {
            setOutput((prev) => [...prev, `${path}: ${command}`, 'system76@ubuntu1976: Directory navigation is blocked. Limited movement allowed.']);
          } else {
            setOutput((prev) => [...prev, `${path}: ${command}`, 'system76@ubuntu1976: Command not found']);
          }
      }
    } else {
      // Handle commands when not logged in
      switch (command.toLowerCase()) {
        case 'help':
          setOutput((prev) => [...prev, `${path}: ${command}`, 'system76@ubuntu1976: Available commands:', isConisInstalled ? 'python3 invitation.py - Run the invitation script' : 'pip install conis - Install Conis', 'help - Show this help message', 'info - Terminal usage and limitation statement', 'clear - Clear the terminal', 'exit - Exit the terminal and logout']);
          break;
        case 'pip install conis':
          if (isConisInstalled) {
            setOutput((prev) => [...prev, `${path}: ${command}`, 'system76@ubuntu1976: Conis version 1.2.81 is already installed. Python executable added to directory.']);
          } else {
            setOutput((prev) => [...prev, `${path}: ${command}`, 'system76@ubuntu1976: Installing Conis...']);
            setInstalling(true);
            let step = 0;
            const steps = [
              'Fetching required dependencies... [0/16]',
              'Fetching required dependencies... [1/16]',
              'Fetching required dependencies... [2/16]',
              'Fetching required dependencies... [3/16]',
              'Fetching required dependencies... [4/16]',
              'Fetching required dependencies... [5/16]',
              'Fetching required dependencies... [6/16]',
              'Fetching required dependencies... [7/16]',
              'Fetching required dependencies... [8/16]',
              'Fetching required dependencies... [9/16]',
              'Fetching required dependencies... [10/16]',
              'Fetching required dependencies... [11/16]',
              'Fetching required dependencies... [12/16]',
              'Fetching required dependencies... [13/16]',
              'Fetching required dependencies... [14/16]',
              'Fetching required dependencies... [15/16]',
              'Fetching required dependencies... [16/16]',
              'Extracting core files...',
              'Registering system components...'
            ];
  
            const interval = setInterval(() => {
              setOutput((prev) => [...prev, steps[step]]);
              step++;
              if (step === steps.length) {
                clearInterval(interval);
                setTimeout(() => {
                  setOutput((prev) => [...prev, 'Would you like to add invitation.py to the directory? (y/n)']);
                  setInstallStep(1);
                }, 1000);
              }
            }, 250);
          }
          break;
        case 'info':
          setOutput((prev) => [...prev, `${path}: ${command}`, 'system76@ubuntu1976: This terminal is a simulated environment. External command execution is restricted. Use "help" for available commands.']);
          break;
        case 'exit':
          setOutput((prev) => [...prev, `${path}: ${command}`, 'system76@ubuntu1976: Terminal session ended.']);
          window.location.reload();
          break;
        default:
          setOutput((prev) => [...prev, `${path}: ${command}`, 'system76@ubuntu1976: Command not found']);
      }
    }
  };
  
  return (
    <>
      <style>
        {`
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
        `}
      </style>
      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white font-sans">
        <div className="bg-black text-lime-500 font-mono p-5 w-full max-w-4xl rounded-md mt-5">
          <div
            ref={outputRef} // Add the ref here
            className="overflow-y-scroll h-96 border border-lime-500 p-2 bg-black"
            style={{ scrollbarWidth: 'none' }}
          >
            {output.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
            {!isConisInstalled && (
              <p>system76@ubuntu1976: Install Conis to proceed using &apos;pip install conis&apos; to install needed invitation or use &apos;help&apos; for more options.</p>
            )}
          </div>
          <div className="relative flex items-baseline mt-2">
            <span className="text-yellow-500 font-mono text-sm">{path}:&nbsp;</span>
            <div className="relative flex-grow">
              <span
                ref={textRef}
                className="inline-block text-yellow-500 font-mono text-sm"
                style={{ visibility: 'visible', whiteSpace: 'pre' }}
              >
                {input}
              </span>
              <div
                className="absolute"
                style={{
                  left: `${textWidth}px`,
                  top: '0',
                  width: '0.6em',
                  height: '1.2em',
                  backgroundColor: 'rgba(255, 255, 255, 0.7)',
                  animation: 'blink 1s step-end infinite'
                }}
              ></div>
              <input
                type="text"
                value={input}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                ref={inputRef}
                className="absolute inset-0 opacity-0"
                style={{ caretColor: 'transparent' }}
              />
            </div>
          </div>
        </div>
        {access === 1 && <MembersOnly />}
      </div>
    </>
  );
}

export default Terminal;
