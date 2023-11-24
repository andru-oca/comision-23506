from django.db import models
from django.db.models import Model

# Create your models here.


class Store(Model):
    nombre = models.CharField(max_length=100)
    ubicacion = models.CharField(max_length=100)
    contacto = models.EmailField(max_length= 200,null=False,blank=False)
    fecha_creacion = models.DateField(auto_now=True)

    class Meta:
        db_table = "tiendas_buenos_aires"
    
    def __str__(self):
        return f"La tienda: {self.nombre}, su ubicacion es: {self.ubicacion}"

    def get_fields(self):
        return [
            (field.verbose_name, field.value_from_object(self))
            for field in self.__class__._meta.fields[1:]
        ]
    
# --> registrar la app en admin.py

