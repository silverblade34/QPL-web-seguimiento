from src.seguimiento.application.response import SeguimientoResponse

class SeguimientoController:
    def seguimientoData(self, inputhbl):
        response = SeguimientoResponse()
        data = response.parsedData(inputhbl)
        return data