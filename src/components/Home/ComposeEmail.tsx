import React, { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from "draft-js";
import { ComposeEmailPropsInterface } from "../../utils/interfaces/homeInterfaces";

const ComposeEmail = ({onToggleEditor}:ComposeEmailPropsInterface) => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const onEditorStateChange = (newEditorState: EditorState) => {
    setEditorState(newEditorState);
  };

  const saveContent = () => {
    const contentState = editorState.getCurrentContent();
    const rawContent = convertToRaw(contentState);
    console.log("Saved content:", JSON.stringify(rawContent));
  };

  const toggleEditorHandler = () => {
    onToggleEditor(false);
  };

  return (
    <div className="h-5/6 w-1/2 absolute z-10 bottom-0 right-12 shadow-lg rounded-t-2xl bg-gray-200 flex flex-col">
      <div className="w-full p-2 flex justify-between items-center h-12">
        <p className="mx-3">New Message</p>
        <button className="rounded-full p-2 bg-cyan-300 mx-3" onClick={toggleEditorHandler}>
          <FaXmark />
        </button>
      </div>
      <div className="bg-gray-100 w-full">
        <input placeholder="Enter email ids separated by comma" className="w-full p-3"/>
      </div>
      <div className="overflow-y-auto flex-1 p-4 bg-gray-100">
        <Editor
          editorState={editorState}
          onEditorStateChange={onEditorStateChange}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
        />
      </div>
      <div className="h-14">
        <button
          onClick={saveContent}
          className="ml-5 mt-2 p-2 bg-cyan-300 text-white rounded-lg"
        >
          Send Email
        </button>
      </div>
    </div>
  );
};

export default ComposeEmail;
