def read_user(dni:int , db_user:list = None)->None:
    
    if db_user is None:
        print("No pasaste ninguna base de datos")
        return None
    
    user_list:list = [
        user
        for user in db_user
        if user.get("dni") == dni
    ]

    if len(user_list)==0:
        return {}


    user:dict = user_list[0] # este indice cero me trae la data dentro de esa list

    print(
        f"""
        El usuario buscado es:
            {user.get("nombre")} de {user.get("edad")} años.

        """
    )

    return user


