from User import Usuario

def get_user(cls,**kwargs)->None:

    if len(cls.db)==0:
        print("No hay usuarios cargados")
        return None

    user_list:list[Usuario] = [
        user
        for user in cls.db
        if user.get_dni() == kwargs.get("dni","")
    ]

    if len(user_list)==0:
        print("No usuarios encontrados")
        return None


    user:Usuario = user_list[0] # este indice cero me trae la data dentro de esa list

    print(user)
    
    return user


