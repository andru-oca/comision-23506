from abc import ABC ,abstractmethod 
from habilidades import SuperTiros
from clubes import Club , ListaClub

class Futbolista(ABC):
    nombre:str 

    @abstractmethod
    def get_nacionalidad(self):
        ...
    @abstractmethod
    def get_position(self):
        ...
    @abstractmethod
    def get_salario(self):
        ...
    @abstractmethod
    def get_goles_agg(self):
        ...



#Herencia multiple
class FutbolistaArgentino(Futbolista,ListaClub,SuperTiros):
    nombre = None

    def __init__(self,**kwargs):

        # super().__init__(base_clubes)

        base_clubes:list = kwargs.get("clubes",[])
        self.nacionalidad= kwargs.get("nacionalidad", "Argentino")
        self.position= kwargs.get("position", False)
        self.salario= kwargs.get("salario", False)
        self.cant_goles= kwargs.get("cant_goles", False)
        tiros=kwargs.get("tiros")
        SuperTiros.__init__(self,tiros)
        ListaClub.__init__(self,base_clubes)




    def __str__(self):
        return f"Soy un futbolista {self.nacionalidad}"
    
    def get_nacionalidad(self):
        return self.nacionalidad
    
    def get_position(self):
        ...
    
    def get_salario(self):
        ...

    def get_goles_agg(self):
        ...
    def to_dict(self):
        return {
            "base_clubes" : self.clubes,
            "nacionalidad" : self.nacionalidad,
            "position" : self.position,
            "salario" : self.salario,
            "cant_goles" : self.cant_goles,
            "tiros" : self.tiros
            }

riquelme:FutbolistaArgentino = FutbolistaArgentino(
        cant_goles= 100
    ,   salario = 1_000_000
    ,   clubes = []
    ,   tiros= 20
)

print(riquelme)
riquelme.nombre_tiro()

barcelona:Club = Club(
        nombre="Barcelona"
    ,   mascota="Aguila"
)

boca:Club = Club(
        nombre="Boca Jr"
    ,   mascota="Ni idea"
)

riquelme.insert_club(boca)
riquelme.insert_club(barcelona)


riquelme.show_clubes()


print(riquelme.to_dict())

class FutbolistaPeruano(Futbolista):
    
    def __init__(self,**kwargs):
        self.nombre = kwargs.get("nombre", "Javier")
        self.nacionalidad= kwargs.get("nacionalidad", "Peruano")
        self.position= kwargs.get("position", False)
        self.salario= kwargs.get("salario", False)
        self.cant_goles= kwargs.get("cant_goles", False)        
    
    def __str__(self):
        return f"Soy un futbolista {self.nacionalidad} y me llamo {self.nombre}"
    

    def get_nacionalidad(self):
        return self.nacionalidad
    
    def get_position(self):
        ...
    
    def get_salario(self):
        ...

    def get_goles_agg(self):
        ...

solano:FutbolistaPeruano = FutbolistaPeruano(
        nombre="solano"
    ,   position="defensor"
)

print(solano)

print(solano.get_nacionalidad())

# Herencia Multiple


