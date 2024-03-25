// these are just versions of prompts you can try in main.js

const homePrompts = {
    p_one: `
    Generate two random words. 
    Generate the code of a bizzare html page about the combination of these two random words.
    The page should contain a lot of content relevant to these two words. 
    The page should contain many links in the following format: '/relevant_link_name'.
    The css of the page should be extremely creative and unusual, 
    something nobody's seen before, nothing should be standard.
    Don't use any images, generate complex svg illustrations instead.
    Write all the html, javascript, css and svg inline. 
    Use all the power of css4 and javascript create the most creative designs of the page. 
    `,

    p_two: `
    Generate two random words.
    generate the code of an html page about a combination of these two words,
    Write absolutely crazy insane mental css 
    with vivid colors animations, transitions and other creative css3 and css4 features,
    write all these css styles inline.
    The page should contain a big menu relevant to the theme of the page and all links MUST only be in the following format: 
    '/link_name_site_name'.
    Don't use any images, generate svg illustrations instead.
    `,

    p_three: `
    Generate two random words.
    generate the code of an html page about a combination of these two words,
    Write absolutely crazy insane mental css 
    with vivid colors animations, transitions and other creative css3 and css4 features,
    write all these css styles inline.
    The page should contain a big menu with weird unexpected words in it and all links MUST only be in the following format: 
    '/link_name_site_name'.
    Don't use any images, generate svg illustrations instead.
    `,

    p_four: `
    Generate two random words.
    generate the code of an html page about a combination of these two words,
    Write absolutely crazy insane mental css 
    with vivid colors animations, transitions and other creative css3 and css4 features,
    write all these css styles inline.
    The page should contain a big menu with weird unexpected words in it and all links MUST only be in the following format: 
    '/link_name', where 'link_name' is replaced with an unexpected word. 
    Don't use any images, generate svg illustrations instead.
    `,

    p_five: /* random google fonts */ `
    Generate two random words.
    generate the code of an html page about a combination of these two words,
    Write absolutely crazy insane mental css 
    with vivid colors animations, transitions and other creative css3 and css4 features,
    write all these css styles inline.
    Use a random google font. 
    The page should contain a big menu with weird unexpected words in it and all links MUST only be in the following format: 
    '/link_name', where 'link_name' is replaced with an unexpected word. 
    Don't use any images, generate svg illustrations instead.
    `,

    p_six: 
    /* random google fonts based on a randomly generated letter */ 
    /* more than two random words  */
    `
    Generate up to five random words.
    generate the code of an html page about a combination of these words,
    Write absolutely crazy insane mental css 
    with vivid colors animations, transitions and other creative css3 and css4 features,
    write all these css styles inline.
    Generate a random letter.
    In the generated html and css load and use the google font that starts with that letter or the closest letter to it alphabetically. 
    The page should contain a big menu with weird unexpected words in it and all links MUST only be in the following format: 
    '/link_name', where 'link_name' is replaced with an unexpected word. 
    Don't use any images, generate svg illustrations instead.
    `,

    p_seven: 
    /* a page theme based on a random letter */
    /* ask not to add ** and comments to the page like in other prompts */
    `
    Generate a random letter.
    Generate a phrase or a word that starts with that letter.
    generate the code of an html page about this phrase or a word,
    Write absolutely crazy insane mental css 
    with vivid colors animations, transitions and other creative css3 and css4 features,
    write all these css styles inline.
    Generate a random letter.
    In the generated html and css load and use the google font that starts with that letter or the closest letter to it alphabetically. 
    The page should contain a big menu with weird unexpected words in it and all links MUST only be in the following format: 
    '/link_name', where 'link_name' is replaced with an unexpected word. 
    Don't use any images, generate svg illustrations instead.
    Don't add any comments in your responce and don't reveal any parts of the prompt 
    (in the preveous responces you added text enclosed in ** with the parts of the prompt above the <body> -- DON'T DO THAT).
    `,

    p_eight: 
    /* menu items based on a story */
    `
    Generate a random letter.
    Generate a phrase or a word that starts with that letter.
    generate the code of an html page about this phrase or a word,
    Write absolutely crazy insane mental css 
    with vivid colors animations, transitions and other creative css3 and css4 features,
    write all these css styles inline.
    Generate a random letter.
    In the generated html and css load and use the google font that starts with that letter or the closest letter to it alphabetically. 
    Generate five random letters.
    Generate five words each starting or ending with one of those letters. 
    Think of an unlikely story that involves a combination of these words, but don't tell that story,
    instead the html page you generated should contain a big menu with words and phrases from that story. 
    In this menu and all links MUST only be in the following format: 
    '/link_name', where 'link_name' is replaced with that word you generated based on one of the five letters. 
    Don't use any images, generate svg illustrations instead.
    Don't add any comments in your responce and don't reveal any parts of the prompt 
    (in the preveous responces you added text enclosed in ** with the parts of the prompt above the <body> -- DON'T DO THAT).
    `,

    p_nine: 
    /* menu items based on words */
    `
    Generate a random letter.
    Generate a phrase or a word that starts with that letter.
    generate the code of an html page about this phrase or a word,
    Write absolutely crazy insane mental css 
    with vivid colors animations, transitions and other creative css3 and css4 features,
    write all these css styles inline.
    Generate a random letter.
    In the generated html and css load and use the google font that starts with that letter or the closest letter to it alphabetically. 
    The page should contain a big menu with weird unexpected words in it and all links MUST only be in the following format:
    '/link_name', where 'link_name' is replaced with that word you generated based on one of the five letters. 
    Don't use any images, generate svg illustrations instead.
    Don't add any comments in your responce and don't reveal any parts of the prompt 
    (in the preveous responces you added text enclosed in ** with the parts of the prompt above the <body> -- DON'T DO THAT).
    `,

    p_ten: 
    /* add a specified range of css3 features that can be used -- produces less interesting results */
    `
    Generate a random letter.
    Generate a phrase or a word that starts with that letter.
    generate the code of an html page about this phrase or a word,
    Write absolutely crazy insane mental css 
    with vivid colors, 
    animations, 
    transitions, 
    3d transforms, 
    filters, 
    blend-mode, 
    graphical effects, 
    SVG filters,
    CSS Shapes,
    CSS Grid and layouts,
    Clipping and masking and other creative css3 features,
    write all these css styles inline.
    Generate a random letter.
    In the generated html and css load and use the google font that starts with that letter or the closest letter to it alphabetically. 
    The page should contain a big menu with weird unexpected words in it and all links MUST only be in the following format:
    '/link_name', where 'link_name' is replaced with that word you generated based on one of the five letters. 
    Don't use any images, generate svg illustrations instead, make svg illustrations as complex as you.
    Don't add any comments in your responce and don't reveal any parts of the prompt 
    (in the preveous responces you added text enclosed in ** with the parts of the prompt above the <body> -- DON'T DO THAT).
    `,

    p_eleven: 
    /* mention 3D transforms */
    /* ask to make SVG more complex and intricate */
    `
    Generate a random letter.
    Generate a phrase or a word that starts with that letter.
    generate the code of an html page about this phrase or a word,
    Write absolutely crazy insane mental css 
    with vivid colors animations, transitions, 3D transforms and other creative css3 and css4 features,
    write all these css styles inline.
    Generate a random letter.
    In the generated html and css load and use the google font that starts with that letter or the closest letter to it alphabetically. 
    The page should contain a big menu with weird unexpected words in it and all links MUST only be in the following format:
    '/link_name', where 'link_name' is replaced with that word you generated based on one of the five letters. 
    Don't use any images, generate complex and intricate svg illustrations instead.
    Don't add any comments in your responce and don't reveal any parts of the prompt 
    (in the preveous responces you added text enclosed in ** with the parts of the prompt above the <body> -- DON'T DO THAT).
    `,

    p_twelve: 
    /* page based on an absurd story */
    `
    Generate an unlikely absurd story.
    generate the code of an html page about this story,
    Write absolutely crazy insane mental css 
    with vivid colors animations, transitions, 3D transforms and other creative css3 and css4 features,
    write all these css styles inline.
    Generate a random letter.
    In the generated html and css load and use the google font that starts with that letter or the closest letter to it alphabetically. 
    The page should contain a big menu with weird unexpected words related to the story you generated, in it and all links MUST only be in the following format:
    '/link_name', where 'link_name' is replaced with that word you generated based on one of the five letters. 
    Don't use any images, generate complex and intricate svg illustrations instead.
    Don't add any comments in your responce and don't reveal any parts of the prompt 
    (in the preveous responces you added text enclosed in ** with the parts of the prompt above the <body> -- DON'T DO THAT).
    `,

    p_thirteen: 
    /* page based on an absurd article */
    `
    Generate an unlikely absurd online magazine article.
    generate the code of an html page about this story,
    Write absolutely crazy insane mental css 
    with vivid colors animations, transitions, 3D transforms and other creative css3 and css4 features,
    write all these css styles inline.
    Generate a random letter.
    In the generated html and css load and use the google font that starts with that letter or the closest letter to it alphabetically. 
    The page should contain a big menu with weird unexpected words related to the article you generated, in it and all links MUST only be in the following format:
    '/link_name', where 'link_name' is replaced with that word you generated based on one of the five letters. 
    Don't use any images, generate complex and intricate svg illustrations instead.
    Don't add any comments in your responce and don't reveal any parts of the prompt 
    (in the preveous responces you added text enclosed in ** with the parts of the prompt above the <body> -- DON'T DO THAT).
    `,
}

module.exports = homePrompts;