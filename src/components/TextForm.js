/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useRef } from "react";

export default function TextForm(props) {
  //Declarations
  const [text, setText] = useState("");
  const { showAlert } = props;
  const ref = useRef(null);
  const ref1 = useRef(null)
  const closeref = useRef(null);
  const [Find, setFind] = useState("");
  const [Replace, setReplace] = useState("");
  const [emails, setEmails] = useState("");
  const [previousFind,setPreviousFind] = useState('');
  const [previousReplace,setPreviousReplace] = useState('');
  const [voices, setVoices] = useState('');
  const [selectedVoice, setSelectedVoice] = useState(5)

  useEffect(() => {
    Cancel();
    ReadText();
  }, [selectedVoice])

  console.log(selectedVoice);
  //UpperCase Conversion
  function convert1() {
    let newText = text.toUpperCase();
    setText(newText);
    showAlert("converted to UpperCase successfully", "success");
  }

  //For Word Count
  function word() {
    if (text.length === 0) {
      return 0;
    } else {
      return text.split(/\s+/).filter((element) => {
        return element.length !== 0;
      }).length;
    }
  }

  //For LowerCase Conversion
  function convert2() {
    let newText = text.toLowerCase();
    setText(newText);
    showAlert("converted to LowerCase successfully", "success");
  }

  //For Clearing Text
  function clear() {
    setText("");
    showAlert("text cleared successfully", "success");
  }

  //Setting Text in Text Variable Created Using setState
  function change(event) {
    setText(event.target.value);
  }

  //For Text Preview
  function preview(text) {
    if (text === "") {
      return "No text to preview";
    } else {
      return text;
    }
  }

  //For Copying Text
  let copy = () => {
    navigator.clipboard.writeText(text);
    showAlert("text copied successfully", "success");
  };

  //For Removing Extra Spaces
  let remove = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    showAlert("extra spaces removed successfully", "success");
  };

  //Find and Replace text
  const find = () => {
    ref.current.click();
  };

  const Fchange = (event) => {
    setFind(event.target.value);
    setPreviousFind(event.target.value);
  };

  const Rchange = (event) => {
    setReplace(event.target.value);
    setPreviousReplace(event.target.value);
  };

  const FindandReplace = () => {
    if (Find === "" || Replace === "") {
      closeref.current.click();
      showAlert("no word to replace", "warning");
    } else {
      setText(text.replaceAll(Find, Replace));
      closeref.current.click();
      showAlert("words replaced successfully", "success");
    }
    setReplace('');
    setFind('');
  };

  const ReadText = () => {
    var msg = new SpeechSynthesisUtterance();
    msg.text = text;
    msg.volume = 1;
    msg.pitch = 1;
    msg.rate = 1;
    msg.voice = window.speechSynthesis.getVoices()[selectedVoice];
    window.speechSynthesis.speak(msg);
  }

  const Cancel = () => { 
    window.speechSynthesis.cancel();
  }

  const PauseText = () => {
    window.speechSynthesis.pause();
  }

  const PlayText = () => {
    window.speechSynthesis.resume();
  }

  const EmailFinder = () => {
    setEmails(
      text.split(' ').filter((elem) => {
        return elem.includes('.com') || elem.includes('.in') || elem.includes('.app');
      })
    )
    showAlert("Emails and Links found successfully", "success");
    ref1.current.click();
  }

  console.log(emails);
  return (
    <div className={`my-5 text-${props.Mode === "light" ? "black" : "white"}`}>
      <h3>{props.heading}</h3>
      <div className="mb-3 my-4">
        <textarea className="form-control" onChange={change} id="exampleFormControlTextarea1" style={{ backgroundColor: props.Mode === "light" ? "white" : "whitesmoke", color: "black" }} value={text} rows="5" placeholder="Enter Your Text here"></textarea>
      </div>
      <button className={`btn btn-${props.Mode === "light" ? "primary" : "danger"} mx-1 my-1`} disabled={text.length === 0} onClick={convert1}>
        Convert to UpperCase
      </button>
      <button className={`btn btn-${props.Mode === "light" ? "primary" : "danger"} mx-1 my-1`} disabled={text.length === 0} onClick={convert2}>
        Convert to LowerCase
      </button>
      <button className={`btn btn-${props.Mode === "light" ? "primary" : "danger"} mx-1 my-1`} disabled={text.length === 0} onClick={clear}>
        Clear
      </button>
      <button className={`btn btn-${props.Mode === "light" ? "primary" : "danger"} mx-1 my-1`} disabled={text.length === 0} onClick={copy}
      >
        Copy Text
      </button>
      <button className={`btn btn-${props.Mode === "light" ? "primary" : "danger"} mx-1 my-1`} disabled={text.length === 0} onClick={remove}
      >
        Remove Extra Spaces
      </button>
      <button className={`btn btn-${props.Mode === "light" ? "primary" : "danger"} mx-1 my-1`} disabled={text.length === 0} onClick={find}>
        Find and Replace
      </button>
      <button className={`btn btn-${props.Mode === "light" ? "primary" : "danger"} mx-1 my-1`} disabled={text.length === 0} onClick={EmailFinder}>
        Find Emails & Links
      </button>
      <hr />
      <h2>Your Assistant</h2>
      <div className="d-flex justify-content-center align-items-center">
        <div className="d-flex justify-content-center align-items-center" onClick={ReadText} style={{ cursor: "pointer", height: '100px', width: '100px' }}>
          <div className="d-flex flex-column align-items-center">
            <i className="fa-solid fa-user fa-xl mb-3"></i>
            <h6>Read</h6>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center" onClick={PauseText} style={{ cursor: "pointer", height: '100px', width: '100px' }}>
          <div className="d-flex flex-column align-items-center">
            <i className="fa-solid fa-pause fa-xl mb-3"></i>
            <h6>Pause</h6>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center" onClick={PlayText} style={{ cursor: "pointer", height: '100px', width: '100px' }}>
          <div className="d-flex flex-column align-items-center">
            <i className="fa-solid fa-play fa-xl mb-3"></i>
            <h6>Resume</h6>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
      <select name="voices" id="voices" style={{width:"300px"}} value={selectedVoice} onChange={(event) => { setSelectedVoice(event.target.value) }}>
          <option value={0}>select voice</option>
          {
            window.speechSynthesis.getVoices().map((elem, index) => {
              return <option value={index} key={index}>{elem.name}</option>
            })
          }
        </select>
        </div>
      <hr />

      {/* modals for showing Find and Replace */}
      <button type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#Modal" ref={ref}>Launch Button</button>

      <div className="modal fade" id="Modal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content" style={{ backgroundColor: props.Mode === "light" ? "white" : "grey", color: props.Mode === "light" ? "black" : "white", }}>
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Find and Replace
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Find
                  </label>
                  <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={Find} placeholder={previousFind} onChange={Fchange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Replace
                  </label>
                  <input type="text" className="form-control" id="exampleInputPassword1" value={Replace} placeholder={previousReplace} onChange={Rchange} />
                </div>
                <div className="mb-3 form-check"></div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" ref={closeref} className="btn btn-secondary d-none" data-bs-dismiss="modal">
                close
              </button>
              <button type="button" onClick={FindandReplace} className={`btn btn-${props.Mode === "light" ? "primary" : "danger"}`}>
                Replace
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* modal for showing Emails and Links */}
      <button type="button" className="btn btn-primary d-none" data-bs-toggle="modal" ref={ref1} data-bs-target="#exampleModal1">Modal Button</button>

      <div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content" style={{ backgroundColor: props.Mode === "light" ? "white" : "grey", color: props.Mode === "light" ? "black" : "white", }}>
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Emails and Links Found</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex flex-wrap">
              {emails &&
                emails.map((elem, index) => {
                  return <p className="mx-1" key={index}>{index+1}) {elem}</p>;
                })
              }
              {emails.length === 0?<p>No Emails and Links found in provided Text</p>:''}
            </div>
          </div>
        </div>
      </div>
      <h2 className="my-5">Summary of Your Text</h2>
      <p>
        {word(text)} Words, {text.length} Characters
      </p>
      <p>{0.008 * word(text)} is time required to read complete paragraph</p>
      <hr />
      <h2 className="my-5">Preview</h2>
      <p>{preview(text)}</p>
    </div>
  );
}
