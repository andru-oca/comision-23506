import random


def generar_usuarios(cantidad:int = 10)->list:
  """
  Docstrings
  Genera una lista de `cantidad` usuarios con nombres y apellidos aleatorios.

  Args:
    cantidad: El número de usuarios a generar.

  Returns:
    Una lista de usuarios.
  """

  usuarios:list = []

  for _ in range(cantidad):
    nombre:str = random.choice(["Juan", "María", "Pedro", "Ana", "José", "Luis", "Carlos", "Laura", "Martín"])
    apellido:str = random.choice(["Pérez", "García", "López", "Martínez", "Rodríguez", "González", "Sánchez", "Fernández", "López"])
    dni:int =random.choice([123,321,12314,4134,12312,1414])
    usuarios.append({
      "nombre": nombre,
      "apellido": apellido,
      "dni":dni
    })

  return usuarios