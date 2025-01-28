import React from "react";
import ReactMarkdown from "react-markdown";

const markdownContent = `
# How to Host Better Email

Throughout my early career as a developer and product manager, I constantly felt that owning what we’ve delivered so far is part of the ability to empower passionate and customer-centric people to create customer experiences at the level it can and should be in digital.

<br>

---

## Nulla tempus suspendisse diam quis sollicitudin.
Use this larger text to briefly introduce communication.  
Velit lobortis venenatis in porttitor turpis.

---

### Roadblock: Achieve Velocity

If you wanna stand out, gotta be outstanding. With a minimalist style, impressive animations, and the power of CMS collections, your digital brand will truly shine. Perfect for talented creators looking to elevate their online interactions and digital brand presence.

> “This is the most obvious intro into creative technique. A good online tool has transformed the whiteboard, making it perfect for brainstorming ideas in a group situation, based on a principle.”

---

## Ad expedita nobis iusto nihil

- Platea mauris aliquet condimentum cras.  
- Egestas nunc blandit adipiscing volutpat fermentum.  
- Nulla tempus suspendisse viverra diam nulla quis consectetur ut in adipiscing sollicitudin.

<br>

---

## Nulla tempus suspendisse diam quis sollicitudin.

Use this larger text to briefly introduce communication.  
Velit lobortis venenatis in porttitor turpis.

---

### Roadblock: Achieve Velocity

If you wanna stand out, gotta be outstanding. With a minimalist style, impressive animations, and the power of CMS collections, your digital brand will truly shine. Perfect for talented creators looking to elevate their online interactions and digital brand presence.
`;

const MarkdownRenderer = () => {
  return (
    <div className="prose max-w-full m-4">
      <ReactMarkdown>{markdownContent}</ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
