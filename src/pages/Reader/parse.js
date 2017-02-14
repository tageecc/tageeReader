const stripAnsi = require('strip-ansi');
const isFullwidthCodePoint = require('is-fullwidth-code-point');
import {Dimensions} from 'react-native';

/**
 * 分页器-计算每页文字个数
 * @param fontSize
 * @param lineHeight
 * @returns {number}
 */
export function pageWidth({fontSize, lineHeight}) {
    let {height, width} = Dimensions.get('window');
    let lineWidth = Math.floor((width - fontSize * 2) / fontSize);//每行字数
    let liens = Math.floor((height - fontSize * 2) / lineHeight);//每页行数
    return lineWidth * liens;
}
export function pageContent({content, pageWidth, index = 1}) {
    if (!content || content == '' || typeof(content) != 'string') {
        return [];
    }
    content = cleanContent(content);
    let pageContent = '';
    let current = '';
    let currentLineWidth = 0;
    for (let i in content) {
        try {
            let s = content[i];
            let code = s.charCodeAt();

            if (code == 10 || code == 13) {
                if (current.trim() == '' && pages.length > 1 && pages[pages.length - 1].trim() == '') {
                    //过滤空行
                } else {
                    pages.push(current);
                }
                currentLine = '';
                currentLineWidth = 0;
                continue;
            }

            let sWidth = stringWidth(s);
            if (currentLineWidth + sWidth > width) {
                pageContent.push(current);
                currentLine = '';
                currentLineWidth = 0;
            }

            currentLine += s;
            currentLineWidth += sWidth;
        } catch (error) {
            console.log(error);
        }
    }
    lines.push(currentLine);

    return lines;
}
export function stringWidth(str) {
    if (typeof str !== 'string' || str.length === 0) {
        return 0;
    }

    let width = 0;

    str = stripAnsi(str);

    for (let i = 0; i < str.length; i++) {
        const code = str.charCodeAt(i);

        if (code == 32) {
            return 0.5;
        }
        // ignore control characters
        if (code <= 0x1f || (code >= 0x7f && code <= 0x9f)) {
            continue;
        }

        // surrogates
        if (code >= 0x10000) {
            i++;
        }

        if (isFullwidthCodePoint(code)) {
            width += 2;
        } else {
            width++;
        }
    }

    return width;
}

function cleanContent(str) {
    let lines = str.split('\n');
    let newlines = [];
    for (let i in lines) {
        let s = lines[i].trim();
        if (s.length > 0) {
            newlines.push('        ' + s);
        }
    }
    return newlines.join('\n\n');
}