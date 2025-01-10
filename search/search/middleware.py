class SecurityHeadersMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        response = self.get_response(request)
        response['Content-Security-Policy'] = (
            "default-src 'self'; "
            "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net https://cloud.google.com https://apis.google.com; "
            "script-src-elem 'self' https://cdn.jsdelivr.net https://cloud.google.com https://apis.google.com; "
            "style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net; "
            "style-src-elem 'self' 'unsafe-inline' https://cdn.jsdelivr.net; "
            "font-src 'self' https://fonts.gstatic.com; "
            "img-src 'self' data: https://*; "
            "connect-src 'self' https://*; "
            "frame-src 'self' https://*;"
        )
        return response