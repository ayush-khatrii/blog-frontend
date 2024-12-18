import { JSONContent } from "novel";
import { useMemo } from "react";
import { generateHTML } from "@tiptap/html";
import { Document } from "@tiptap/extension-document";
import { Paragraph } from "@tiptap/extension-paragraph";
import { Text } from "@tiptap/extension-text";
import { Link } from "@tiptap/extension-link";
import { Underline } from "@tiptap/extension-underline";
import { Heading } from "@tiptap/extension-heading";
import { ListItem } from "@tiptap/extension-list-item";
import { BulletList } from "@tiptap/extension-bullet-list";
import { Code } from "@tiptap/extension-code";
import { Blockquote } from "@tiptap/extension-blockquote";
import { CodeBlockLowlight } from "@tiptap/extension-code-block-lowlight";
import { TextStyle } from "@tiptap/extension-text-style";
import { Bold } from "@tiptap/extension-bold";
import { OrderedList } from "@tiptap/extension-ordered-list";



const RenderBlogPost = ({ json, isHomPage }: { json: JSONContent, isHomPage?: boolean }) => {
  const outPut = useMemo(() => {
    try {
      return generateHTML(json, [
        Document,
        Paragraph,
        Text,
        Link,
        Underline,
        Heading,
        ListItem,
        BulletList,
        Code,
        Blockquote,
        CodeBlockLowlight,
        TextStyle,
        Bold,
        OrderedList
      ]);
    } catch (error) {
      console.error("Error generating HTML:", error);
      return "<p>Error rendering content</p>";
    }
  }, [json]);

  return (isHomPage ?
    <div
      className="prose dark:prose-invert"
      dangerouslySetInnerHTML={{ __html: outPut.slice(0, 100) }} />
    :
    <div
      className="prose dark:prose-invert"
      dangerouslySetInnerHTML={{ __html: outPut }} />
  )
};


export default RenderBlogPost;


