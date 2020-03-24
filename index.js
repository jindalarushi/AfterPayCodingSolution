

var menus = {
        buttons:[
				    {
				        menuItem: 'Home',
                        path: 'others.html', 
                        id:'home',
				    },
				    {
				        menuItem: 'About Us',
				        path: 'others.html',
                        id:'aboutUs',
				    },
				    {
				        menuItem: 'Services',
                        path: 'others.html',
                        id:'services',
				        subMenu:[
									{
										subMenuItem: 'Contact Us',
										path:'others.html',
										id:'contactUs'
									},
                                    {
										subMenuItem: 'Favorites',
										path:'others.html',
										id:'favorites'
									},
                                    {
										subMenuItem: 'Job Search',
										path:'others.html',
										id:'jobSearch'
									}
                                ]
				    },
				    {
				        menuItem: 'FAQ',
				        path: 'others.html',
                        id:'faq',
				    },
				    {
				        menuItem: 'Locate Us',
				        path:'others.html',
                        id:'locateUs',
				    },
				    {
				        menuItem: 'Register',
				        path:'registration.html',
                        id:'register',
                    }
				]
            }
 

document.write("<div class ='container'>");
menus.buttons.map(button =>
{
    document.write("<button class='");
    document.write(button.id);
    document.write("'>");
    document.write(button.menuItem);
    button.subMenu ? document.write("<i class='fa fa-caret-down'></i>") : '';
    document.write("</button>");
    button.subMenu ? document.write("<div class='dropdown-container'>") : '';
    button.subMenu ? button.subMenu.map(item =>
                      {
                        document.write("<button class='");
                        document.write(item.id);
                        document.write("'>");
                        document.write(item.subMenuItem);
                        document.write("</button>")
                      }) :'';
    button.subMenu ? document.write("</div>") : '';
})
document.write("</div>");

var dropdown = document.getElementsByClassName("services");
var i;
for (i = 0; i < dropdown.length; i++) 
{
  dropdown[i].addEventListener("click", function() 
  {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") 
    {
        dropdownContent.style.display = "none";
    } 
    else 
    {
        dropdownContent.style.display = "block";
    }
  });
}

var register = document.getElementsByClassName("register");
register[0].addEventListener("click", function() {
    location.href = "registration.html";
})

var home = document.getElementsByClassName("home");
home[0].addEventListener("click", function() {
    location.href = "others.html";
})

var aboutUs = document.getElementsByClassName("aboutUs");
aboutUs[0].addEventListener("click", function() {
    location.href = "others.html";
})

var faq = document.getElementsByClassName("faq");
faq[0].addEventListener("click", function() {
    location.href = "others.html";
})

var locateUs = document.getElementsByClassName("locateUs");
locateUs[0].addEventListener("click", function() {
    location.href = "others.html";
})

var contactUs = document.getElementsByClassName("contactUs");
contactUs[0].addEventListener("click", function() {
    location.href = "others.html";
})

var favorites = document.getElementsByClassName("favorites");
favorites[0].addEventListener("click", function() {
    location.href = "others.html";
})

var jobSearch = document.getElementsByClassName("jobSearch");
jobSearch[0].addEventListener("click", function() {
    location.href = "others.html";
})					