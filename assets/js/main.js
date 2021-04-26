    // app Vue instance
    const app = Vue.createApp({
      // app initial state
      data() {
        return {
          selectedCategory : 'html',
          index : 0,
          shownext : true,
          showprev : true,
          datalength : '',
          correctAnswer: 0,
          wrongAnswer: 0,
          palleton : '',
          isDisabled : true,
          selectedAnswer: '',
          quizdata :
            {
              html : [ 
                {
                  question : 'HTML is what type of language ?',
                  options : ["Scripting Language","Markup Language","Programming Language","Network Protocol"],
                  answer : "Markup Language",
                },
                {
                  question : 'HTML uses',
                  options : ["User defined tags","Pre-specified tags","Fixed tags defined by the language","Tags only for linking"],
                  answer : "Fixed tags defined by the language",
                },
                {
                  question : 'The year in which HTML was first proposed _______.',
                  options : ["1990","1980","2000","1995"],
                  answer : "1990",
                },
                {
                  question : 'Fundamental HTML Block is known as ___________.',
                  options : ["HTML Body","HTML Tag","HTML Attribute","HTML Element"],
                  answer : "HTML Tag",
                },
                {
                  question : 'Apart from <b> tag, what other tag makes text bold ?',
                  options : ["<fat>","<strong>","<black>","<emp>"],
                  answer : "<strong>",
                },
                {
                  question : 'What is the full form of HTML?',
                  options : ["HyperText Markup Language","Hyper Teach Markup Language","Hyper Tech Markup Language","None of these"],
                  answer : "HyperText Markup Language",
                },
                {
                  question : 'Who is Known as the father of World Wide Web (WWW)?',
                  options : ["Robert Cailliau","Tim Thompson","Charles Darwin","Tim Berners-Lee"],
                  answer : "Tim Berners-Lee",
                },
                {
                  question : 'How can you make a bulleted list with numbers?',
                  options : ["<dl>","<ol>","<list>","<ul>"],
                  answer : "<ol>",
                },
                {
                  question : 'Which HTML tag produces the biggest heading?',
                  options : ["<h7>","<h2>","<h1>","<h5>"],
                  answer : "<h1>",
                },
                {
                  question : 'Tags and texts that are not directly displayed on the page are written in _____ section.',
                  options : ["<head>","<title>","<body>","<html>"],
                  answer : "<head>",
                },
              ],
              css : [ 
                {
                  question : 'If we want define style for an unique element, then which css selector will we use ?',
                  options : ["Id","text","class","name"],
                  answer : "Id",
                },                  
                {
                  question : 'Suppose we want to arragnge five nos. of DIVs so that DIV4 is placed above DIV1. Now, which css property will we use to control the order of stack?',
                  options : ["d-index","s-index","x-index","z-index"],
                  answer : "z-index",
                },                  
                {
                  question : 'If we want to use a nice looking green dotted border around an image, which css property will we use?',
                  options : ["border-color","border-decoration","border-style","border-line"],
                  answer : "border-style",
                },                  
                {
                  question : 'What should be the table width, so that the width of a table adjust to the current width of the browser window?',
                  options : ["640 pixels","100%","full-screen","1024 px"],
                  answer : "100%",
                },                  
                {
                  question : 'Which element is used in the <HEAD> section on an HTML / XHTMLpage, if we want to use an external style sheet file to decorate the page ?',
                  options : ["<src>","<link>","<style>","<css>"],
                  answer : "<link>",
                },                  
                {
                  question : 'When we write <img src="img.png">, what "img.png" inside double quote implies?',
                  options : ["element","attribute","value","operator"],
                  answer : "value",
                },                  
                {
                  question : 'How can we write comment along with CSS code ?',
                  options : ["/* a comment */","// a comment //","/ a comment /","<' a comment'>"],
                  answer : "/* a comment */",
                },                  
                {
                  question : 'The default value of "position" attribute is _________.',
                  options : ["fixed","absolute","inherit","relative"],
                  answer : "relative",
                },                  
                {
                  question : 'How will you make all paragraph elements "RED" in color ?',
                  options : ["p.all {color: red;}","p.all {color: #990000;}","all.p {color: #998877;}","p {color: red;}"],
                  answer : "p {color: red;}",
                },                  
              ],
              js : [ 
                {
                  question : 'Why so JavaScript and Java have similar name?',
                  options : ["JavaScript is a stripped-down version of Java","JavaScript's syntax is loosely based on Java's","They both originated on the island of Java","None of the above"],
                  answer : "JavaScript's syntax is loosely based on Java's",
                },                  
                {
                  question : 'When a user views a page containing a JavaScript program, which machine actually executes the script?',
                  options : ["The User's machine running a Web browser","The Web server","A central machine deep within Netscape's corporate offices","None of the above"],
                  answer : "The User's machine running a Web browser",
                },                  
                {
                  question : '______ JavaScript is also called client-side JavaScript.',
                  options : ["Microsoft","Navigator","LiveWire","Native"],
                  answer : "Navigator",
                },                  
                {
                  question : '__________ JavaScript is also called server-side JavaScript.',
                  options : ["Microsoft","Navigator","LiveWire","Native"],
                  answer : "LiveWire",
                },                  
                {
                  question : ' _____ JavaScript statements embedded in an HTML page can respond to user events such as mouse-clicks, form input, and page navigation.',
                  options : ["Client-side","Server-side","Local","Native"],
                  answer : "Client-side",
                },                  
                {
                  question : 'What should appear at the very end of your JavaScript?',
                  options : ["The </script>","The <script>","The END statement","None of the above"],
                  answer : "The </script>",
                },                  
                {
                  question : 'Which of the following attribute can hold the JavaScript version?',
                  options : ["LANGUAGE","SCRIPT","VERSION","None of the above"],
                  answer : "LANGUAGE",
                },                  
                {
                  question : 'What is the correct JavaScript syntax to write "Hello World"?',
                  options : ["System.out.println('Hello World')","println ('Hello World')","document.write('Hello World')","response.write('Hello World')"],
                  answer : "document.write('Hello World')",
                },                  
                {
                  question : 'What is the correct syntax for referring to an external script called " abc.js"?',
                  options : ["<script href='abc.js'>","<script name='abc.js'>","<script src='abc.js'>","None of the above"],
                  answer : "<script src='abc.js'>",
                },                  
                {
                  question : 'JavaScript entities start with _______ and end with _________.',
                  options : ["Semicolon, colon","Semicolon, Ampersand","Ampersand, colon","Ampersand, semicolon"],
                  answer : "Ampersand, semicolon",
                },                  
                {
                  question : 'Which of the following event fires when the form element loses the focus: <button>, <input>, <label>, <select>, <textarea>?',
                  options : ["onfocus","onblur","onclick","ondblclick"],
                  answer : "onblur",
                },                  
                {
                  question : `<script type="text/javascript">
                  x=4+"4";
                  document.write(x);
                  </script>
                  
                  Output------?`,
                  options : ["44","8","4","Error output"],
                  answer : "44",
                },                  
                {
                  question : `Is it possible to nest functions in JavaScript?`,
                  options : ["True","False"],
                  answer : "True",
                },                  
                {
                  question : `<script language="javascript">
                  function x()
                  {
                  document.write(2+5+"8");
                  }
                  </script>`,
                  options : ["258","Error","7","78"],
                  answer : "78",
                },                  
                {
                  question : `What is mean by "this" keyword in javascript?`,
                  options : ["It refers current object","It referes previous object","It is variable which contains value","None of the above"],
                  answer : "It refers current object",
                },                  
              ],
            },
        }
      },

      // watch todos change for localStorage persistence
      watch: {
        selectedCategory : function (){
          this.datalength = this.quizdata[this.selectedCategory].length - 1;
        }
      },

      // computed properties
      // http://vuejs.org/guide/computed.html
      computed: {
        types() {
          return Object.keys(this.quizdata);
        },
      },
      created(){
      },
      mounted() {
        this.datalength = this.quizdata[this.selectedCategory].length - 1;
        document.querySelectorAll('.menu-item')[0].classList.add('active');
      },
      // methods that implement data logic.
      // note there's no DOM manipulation here at all.
      methods: {
        activemenu : function(eve,cat){
          document.querySelector('.menu-list').querySelectorAll('.menu-item').forEach(function(ele,key){
            ele.classList.remove('active');
          });
          eve.target.classList.add("active");
          this.selectedCategory = cat;
          this.index = 0;
        },
        nextslide : function(){
          if(this.selectedAnswer == ''){
            alert('Please select an option');
            this.isDisabled = true;
          }
          else{
            this.index++;
            this.isDisabled = false;
          }
          
          this.selectedAnswer = ''
          this.isDisabled = true;
        },
        // prevslide : function(){
        //   this.index--;
        //   this.selectedAnswer = ''
        // },
        answered(e) {
          this.selectedAnswer = e.target.value
          this.isDisabled = false;
          if(this.selectedAnswer == this.quizdata[this.selectedCategory][this.index].answer)
              this.correctAnswer++
          else
              this.wrongAnswer++
        },
        resetQuiz() {
          this.index = 0
          this.selectedAnswer = ''
          this.correctAnswer = 0
          this.wrongAnswer = 0
      }
      },

      // a custom directive to wait for the DOM to be updated
      // before focusing on the input field.
      // http://vuejs.org/guide/custom-directive.html
      directives: {
      }
    });
    // window.addEventListener("hashchange", onHashChange);

    // mount
    app.mount(".quizapp");