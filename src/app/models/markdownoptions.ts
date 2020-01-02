import { MarkedjsOption } from 'ngx-markdown-editor';

// ****************************************************
// * Source for the Markdown Editor
// * https://www.npmjs.com/package/ngx-markdown-editor
// * Markdown tag
// * https://www.npmjs.com/package/ngx-markdown
// ****************************************************

export class Markdownoptions {
    showPreviewPanel?: boolean;    // Show preview panel, Default is true
    showBorder?: boolean;          // Show editor component's border. Default is true
    // tslint:disable-next-line: max-line-length
    hideIcons?: Array<string>;     // ['Bold', 'Italic', 'Heading', 'Refrence', 'Link', 'Image', 'Ul', 'Ol', 'Code', 'TogglePreview', 'FullScreen']. Default is empty
    usingFontAwesome5?: boolean;   // Using font awesome with version 5, Default is false
    scrollPastEnd?: number;        // The option for ace editor. Default is 0
    enablePreviewContentClick?: boolean;  // Allow user fire the click event on the preview panel, like href etc. Default is false
    resizable?: boolean;           // Allow resize the editor
    markedjsOpt?: MarkedjsOption;  // The markedjs option, see https://marked.js.org/#/USING_ADVANCED.md#options
    customRender?: {              // Custom markedjs render
      // tslint:disable-next-line: ban-types
      image?: Function;     // Image Render
      // tslint:disable-next-line: ban-types
      table?: Function;     // Table Render
      // tslint:disable-next-line: ban-types
      listitem?: Function;  // Listitem Render
    };
}
