#program to print star pattern using python 

row=6 #give te number of rows you want in star pattern

print("* "*row) # simply printing first row

for i in range(0,row-2):  #using for loop to print rows from 2 to row-1
    
    print("*"+" "*((row-2-i)*2-1)+"*")

print("*") # simply printing last row
