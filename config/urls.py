from django.contrib import admin
from django.urls import path, include

from config import settings
from rows.api.views import index

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/rows/', include('rows.api.urls')),
    path('', index)
]

if settings.DEBUG:
    import debug_toolbar
    urlpatterns += [
        path('__debug__/', include(debug_toolbar.urls)),
    ]
