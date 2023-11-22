from django.views.generic import TemplateView

class LandingPageTemplate(TemplateView):
    template_name = "index.html"