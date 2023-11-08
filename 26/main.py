# saludo:str = "hola mundo desde github codespaces"

# print(saludo)

# array | str ==> list

my_first_list:list = []

# print(  len(my_first_list) ) # 0

my_first_list.append(['.','~','-'])
my_first_list.append("raul_alvarado")
my_first_list.append(1_000_000.25)
my_first_list.append(['.','~','-'])


# print(my_first_list)

# print(my_first_list[2])

for e in my_first_list:
    # print(e)
    ...

my_first_list.pop(0)
my_first_list.pop(2)

# print(my_first_list)

fruits:list = [
    "🍇",
    "🍈",
    "🍉",
    "🍊",
    "🍋",
    "🍌",
    "🍍",
    "🥭",
    "🍎",
    "🍏",
    "🍐",
    "🍑",
    "🍒",
    "🍓",
    "🥝",
    "🍅",
    "🥥"
]


five_f:list = fruits[:5][::-1]
rest_f:list = fruits[5:]

# print(five_f)
# print(rest_f)

fruits.insert(10,"hola!!")
fruits[10] += "Holaaaa!!"


# for indice,fruit in enumerate(fruits,start=1):
#     print(f"Orden de fruta {indice:2} : fruta {fruit:_^10}")



# ----------------------------

dato:tuple = ("uno",["dos"])

dato[1].append("tres")
# dato[1] = []

# print(dato[1])


# ------------------
# Dict

matias:dict = {
    "nombre":"Matias",
    "dni": 987123,
    "status":True,
    "lang":["Js","Python","GoLang"],
    10:"datatype",
    ("a","b"):"soy una tupla!"
} 

print(matias)

print(matias.items())

for k,v in matias.items():
    print(f"{k} -> {v}")


a , b = ("primer valor\n","segundo valor\n")


print(a ,b)





nuevas_frutas:list= fruits + [ 
    "🍎",
    "🍏",
    "🍐",
    "🍑",
    "🍒",
    "🍓",
    "🥝",
    "🍅",
    "🥥"
]

# frutas_unicas:set = set(nuevas_frutas)

# print(nuevas_frutas)
# frutas_unicas:list = list(frutas_unicas)

# print(frutas_unicas)

# print(sum([1,2,3,45,56,4,6,2,3,3,4,123]))


# for index,fruta in enumerate(nuevas_frutas):
#     if fruta == "🍓":
#         nuevas_frutas.pop(index)


# list comprehension

nuevas_frutas_sin_frutillas = [
                            fruta # variable que va a quedar
                            for fruta in nuevas_frutas  # iteracion
                            if fruta != "🍓" # condicion
                        ]


print(nuevas_frutas)

print(nuevas_frutas_sin_frutillas)

"""

DESAFIO !!!

In the Fizz, Buzz, and Fizz Buzz groups, the programming assignment Fizz-Buzz demonstrates the division of numbers. Assume the user is given the number 'n,' and they are asked to display the string representations of all the numbers from 1 to n. However, there are some restrictions, such as:

If the number can be divided by 3, it will output Fizz instead of the number.
If the number is divisible by 5, the result will display Buzz instead of the number.
And if the given number is divisible by both 3 and 5, Fizz Buzz will be printed instead of the number.
If the number cannot be divided by 3 or 5, it will be printed as a string.

"""

# ------- #
# dict comprehension

usuarios:list = [
        "John"
    ,   "Hector"
    ,   "Alejandro"
    ,   "Gastón"
]

usuarios_cbu:list = [
        "cuv-iouiouasd879"
    ,   "laplata-sdmasdkljalskd"
    ,   "icb-sdmasdkljalskd"
    ,   "cbu-sdmasdkljalskd"
]


## zip
 
cuenta_usuario = zip(usuarios,usuarios_cbu)



# dict_usuario:dict = {
#     nombre : cbu 
#     for nombre,cbu in  list(cuenta_usuario)
# }

from pprint import pprint as pp


list_data_usuario:list = [
    {
            "nombre":nombre
        ,   "cbu" :cbu
        ,   "status":True
     }

     for nombre,cbu in list(cuenta_usuario)
]


# print(dict_usuario)
pp(list_data_usuario,indent=4)



















