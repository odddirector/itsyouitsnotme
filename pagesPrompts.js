// these are just versions of prompts you can try in main.js

function pagesPrompts(subject) {
  return {
    p_one: `
        generate the code of an html page about ${subject}. 
        Write absolutely crazy insane mental css 
        with vivid colors animations and transitions 
        and write all these css styles inline. 
        Rewrite all the css to make it even crazier, also all inline. 
        Make all links on the site work and link to relevant urls 
        within the site (all links MUST only be in the following format: 
        '/link_name_site_name' - no subcategories or .html extension ).  
        Don't use any images, generate svg illustrations instead.`,

    p_two: `
        generate the code of an html page about ${subject}. 
        Write absolutely crazy insane mental css 
        with vivid colors animations and transitions 
        and write all these css styles inline. 
        Rewrite all the css to make it even crazier, also all inline. 
        Create a menu with weird unexpected words and make all links in the menu work and link to relevant urls 
        within the site (all links MUST only be in the following format: 
        '/link_name_site_name' - no subcategories or .html extension ).  
        Don't use any images, generate svg illustrations instead.`,

    p_three: /* random google fonts */ `
        generate the code of an html page about ${subject}. 
        Write absolutely crazy insane mental css 
        with vivid colors animations and transitions 
        and write all these css styles inline. 
        Rewrite all the css to make it even crazier, also all inline. 
        Use a random google font. 
        The page should contain a big menu with weird unexpected words in it and all links MUST only be in the following format: 
        '/link_name', where 'link_name' is replaced with an unexpected word. 
        Don't use any images, generate svg illustrations instead.`,

    p_four:
      /* random google fonts based on a randomly generated letter */
      /* phrases in menu  */
      /* css prompt like on homepage  */
      /* ask not to add ** and comments to the page like in other prompts */
      `
        generate the code of an html page about ${subject}. 
        Write absolutely crazy insane mental css 
        Write absolutely crazy insane mental css 
        with vivid colors animations, transitions and other creative css3 and css4 features,
        and write all these css styles inline. 
        Rewrite all the css to make it even crazier, also all inline. 
        Generate a random letter.
        In the generated html and css load and use the google font that starts with that letter or the closest letter to it alphabetically. 
        The page should contain a big menu with weird unexpected words or phrases in it and all links MUST only be in the following format: 
        '/link_name', where 'link_name' is replaced with an unexpected word. 
        Don't use any images, generate svg illustrations instead.
        (in the preveous responces you added text enclosed in ** with the parts of the prompt above the <body> -- DON'T DO THAT).
        `,

    p_five:
      /* random google fonts based on a randomly generated letter */
      /* phrases in menu  */
      /* css prompt like on homepage  */
      /* ask not to add ** and comments to the page like in other prompts */
      `
        generate the code of an html page about ${subject}. 
        Write absolutely crazy insane mental css 
        Write absolutely crazy insane mental css 
        with vivid colors animations, transitions and other creative css3 and css4 features,
        and write all these css styles inline. 
        Rewrite all the css to make it even crazier, also all inline. 
        Generate a random letter.
        In the generated html and css load and use the google font that starts with that letter or the closest letter to it alphabetically. 
        The page should contain a big menu with weird unexpected words or phrases in it related to ${subject} and all links MUST only be in the following format: 
        '/link_name', where 'link_name' is replaced with an unexpected word. 
        Don't use any images, generate svg illustrations instead.
        (in the preveous responces you added text enclosed in ** with the parts of the prompt above the <body> -- DON'T DO THAT).
    `,
  };
}

module.exports = pagesPrompts;
