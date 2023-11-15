import random

class Usuario(object):

# class Usuario(object):
    # atributos clase
    tipo_dni:str = "DNI"
    tipo_persona:str = "humana"
    
    # def __init__(self,nombre:str,email:str,dni:str) -> None:
    #     self.nombre =  nombre
    #     self.email = email
    #     self.dni = dni

    # kwargs

    def __init__(self,**kwargs) -> None:
        self.nombre:str =  kwargs["nombre"]
        
        self.email:str = self.__generador_email(
            kwargs.get("email",None)
        )
    
        self.dni:str = kwargs["dni"]


    def __str__(self) -> str:
        return f"""
        Hola, soy {self.nombre}
        Mi email: {self.email}
        Mi {self.tipo_dni}: {self.dni}
        Soy una persona {self.tipo_persona}
        """

    # metodos
    def __get_tipo_persona(self):
        return self.tipo_persona

    def __generador_email(self,email:str) -> str:
        lista_domain:list[str]=["yahoo.com","sarasa.com","google.com"]

        if email is None:
            domain:str = random.choice(lista_domain)
            return f"{self.nombre}_email@{domain}"

        return email

    # getters
    def get_dni(self):
        return self.dni
    