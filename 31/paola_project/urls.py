from django.contrib import admin
from django.urls import path

from .views import LandingPageTemplate

urlpatterns = [
    path("admin/", admin.site.urls),
    path("",LandingPageTemplate.as_view(),name="landing")
]
