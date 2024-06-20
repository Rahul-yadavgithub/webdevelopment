1 = npm init 
2= npm i express
3= npm i ejs
4= npm i mongoose
# for using the Rs symbole in the number we need to add one html code which is 
&#8377
# Now we want to seperate the rupeese via (,) for that we use some function
num.toLocaleString("en-IN")

# Now we require to install the (ejs-mate) => Help us to crate so many templete so that we can eassily apply in our project

# Boiler plate is the code which is erliyerly achived by that

# go to the bootstrap website and use some template

# for adding the font we need to vist the website of fontawesome par and the icon which you need seach and take their html code and paste them
and using fontawesome we can not access the icon directly for that we need to vist on the website of (font awesome cdn)

# border-bottom => is used so that the seperation between the upper and lower party clearly seen with one line

# Ab navbar bhi slide karne par upper chala jata hai aur ham vahi nhi chahte hai to use liye we use (sticky-top)in our nav bar


# From validation 
we know if the data i want to save in our data base and that database is incomplete so in our db the data storeded in the wrong formate so we need to store the data in our db in correct formate for that we need to use some client side validation which provides some constraints

# Now we want to add some validation which seems simliar to each and every browse for that we need to go on bootstrap website and checkout validation inside the form and add
 (novalidate) and in class we add   (needs-validation) and in the boilerplate.ejs file we add one more srcipt which connect with js file in js file the we copy from the bootstrap website

 # Their is some custome error in our code => means if someone enter the number in the form of string then our async function simltaniously return error so encountring this type of error is know as the custome error

 # we try to make error file which give the error on our server in well defined formate 

 # validations for Schema  
 => Hamre schema ko validate karne ka kaam karta hai ye (joi) In a eassier formate => for that we need to install this 

 # after that we want to validation for schema

 # creating Reviews is going to two step process 
 1=> setting up the Reviews From 
 2=> Submitting the form   

 # for sending our review we need to send our review to the path=> POST/listings/:id/reviews  => we don't send seperatly only reviews route we need that our review will connect each and every listings element this is our one to many one relation 

 # For deletion  the review  for our listing we need to use one mongo operation named as => $pull operator 

 # use of pull operator
 => the $pull operator removes from an existing array all instancses of a value or values that match a specified condition.


  # Resturctring our routes

 # we make the the listing.js file inside the router and copy all the routes form the app.js file and paste it into the listing.js file and delete all the routes form the app.js and afte that we also remove all the /listing routes form the ip address route like ("/listing/:id")=> ko hamne
 # ("/:id") hi rakha hai 

 # Resturcturin our reviews

 copy all the review post deleting routes form the app.js file into the review.js file in the directory of the routes 
 and also change app.get into the router.get for making router file 
