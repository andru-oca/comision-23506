from django.views.generic import TemplateView


class Index(TemplateView):
    extra_context = {"comision": "23506"}
    template_name = "index.html"
