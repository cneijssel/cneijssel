
List of notes regarding structuring and maintaining a website
in particular for best practices.

##########################################################
Structuring CSS:
##########################################################
Personal preference: 
    - Give link in comments when a link was particularly 
      useful, my way of giving credit through referencing.

One or more files:
    - A single CSS file is in principle faster with
      fewer files to load and fewer http-requests
  
    - If it becomes too big, then you could think of
      making it modular and using code/software to bundle it

    Although in earlier versions I used a CSS per theme/bundle 
    of I noticed it quickly resulted in duplicate code. Hence, 
    for now I start with a single CSS file for the entire website.
    In future if it becomes too big, make an essential CSS on first
    load and other CSS for later loads.

    See also:
    https://www.reddit.com/r/css/comments/pllihb/one_css_file_or_multiple/
    https://www.quora.com/It-s-better-practice-to-have-a-big-CSS-file-or-many-smaller-ones-Why

Coding styles
    - argument and value on different lines
    - two space indentation
    - comment enough with /* method */
    - hyphenation to connect words
    - try to not be over specific with names of properties and selectors
    - Important to learn, the combination of selectors and hyphenation.
      Using this reduces duplicate code and allows fine tuning from template
      See DRY method in 
      https://www.freecodecamp.org/news/7-important-tips-for-writing-better-css/
    
      
      
    See also:
    https://docs.ckan.org/en/2.9/contributing/css.html
    https://developer.wordpress.org/coding-standards/wordpress-coding-standards/css/#selectors
