import Header from "@editorjs/header";
import List from "@editorjs/list";
import Embed from "@editorjs/embed";

export const notesConfig = {
  /**
   * Id of Element that should contain Editor instance
   */
  // holder: "note-editor",
  placeholder: "Enter your note...",
  autofocus: true,
  tools: {
    header: {
      class: Header,
      inlineToolbar: ["link"]
    },
    list: {
      class: List,
      inlineToolbar: ["link", "bold"]
    },
    embed: {
      class: Embed,
      inlineToolbar: false,
      config: {
        services: {
          youtube: true,
          coub: true
        }
      }
    }
  }
};
