import React, { useState } from 'react';

function App() {
  const [terminalInput, setTerminalInput] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);

  const handleInputChange = (event) => {
    setTerminalInput(event.target.value);
  };

  const handleEnterKey = (event) => {
    if (event.key === 'Enter') {
      // Add logic for what happens when Enter is pressed
      console.log('Execute command: ', terminalInput);
      setTerminalInput('');
    }
  };

  return (
    <div style={styles.body}>
      <div style={styles.navbar}>
        <a href="#" style={styles.navLink}>Home</a>
        <a href="#" style={styles.navLink}>About</a>
        <a href="#" style={styles.navLink}>Contact</a>
      </div>

      <div style={styles.puzzleContainer}>
        <div style={styles.terminal}>
          <div style={styles.remoteUser}>User@CyberGame:~$</div>
          <input
            style={styles.input}
            type="text"
            value={terminalInput}
            onChange={handleInputChange}
            onKeyDown={handleEnterKey}
            autoFocus
          />
          {cursorVisible && <div style={styles.cursor}>|</div>}
        </div>
      </div>

      <div style={styles.fileExplorer}>
        <div style={styles.rootFolder}>
          <div style={styles.folder}>Root Folder</div>
          <div style={styles.rootSubfolders}>
            <div style={styles.folder}>Subfolder 1</div>
            <div style={styles.folder}>Subfolder 2</div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  body: {
    overflow: 'hidden',
    backgroundColor: '#2b2b3b',
    color: 'white',
    fontFamily: 'Arial, sans-serif',
    margin: 0,
    padding: 0,
    textAlign: 'center'
  },
  navbar: {
    backgroundColor: '#4a90e2',
    padding: '10px',
    textAlign: 'left',
    borderBottom: '2px solid #7d4698'
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    padding: '10px 15px',
    display: 'inline-block'
  },
  puzzleContainer: {
    backgroundColor: 'black',
    color: 'lime',
    fontFamily: 'monospace',
    padding: '20px',
    width: '80%',
    maxWidth: '600px',
    borderRadius: '5px',
    margin: 'auto'
  },
  terminal: {
    width: '96%',
    height: '300px',
    border: '1px solid lime',
    padding: '10px',
    overflowY: 'scroll',
    backgroundColor: 'black',
    textAlign: 'left',
    fontFamily: 'monospace',
    fontWeight: 'normal'
  },
  remoteUser: {
    color: 'yellow',
    marginRight: '0',
    fontFamily: 'monospace',
    fontSize: '14px',
    lineHeight: '16px',
    fontWeight: 'normal'
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
    paddingLeft: '0',
    marginTop: '10px',
    lineHeight: '16px',
    fontWeight: 'normal'
  },
  cursor: {
    position: 'absolute',
    top: '14px',
    left: '0',
    fontFamily: 'monospace',
    fontSize: '14px',
    fontWeight: 'bold',
    color: 'white',
    animation: 'blink 1s step-start infinite'
  },
  fileExplorer: {
    width: '80%',
    maxWidth: '600px',
    background: '#222',
    color: 'white',
    padding: '10px',
    borderRadius: '5px',
    fontFamily: 'monospace',
    margin: '20px auto',
    textAlign: 'left',
    border: 'none',
    display: 'none'
  },
  rootFolder: {
    display: 'block'
  },
  folder: {
    fontWeight: 'bold',
    cursor: 'pointer',
    padding: '5px',
    display: 'none',
    transition: 'background-color 0.3s ease'
  },
  rootSubfolders: {
    display: 'block'
  }
};

export default App;
