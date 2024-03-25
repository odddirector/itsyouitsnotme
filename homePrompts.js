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
    `
}

module.exports = homePrompts;