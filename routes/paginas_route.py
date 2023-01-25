from flask import Flask, request, render_template, redirect, url_for, session
from datetime import datetime
from flask_cors import CORS, cross_origin
from src.seguimiento.infrastructure.controller import SeguimientoController
import locale
from __main__ import app
app.secret_key = "hhyy526//--"
CORS(app)

@app.route('/', methods = ['POST', 'GET'])
def index():
    if request.method == 'POST':
        if request.form['floatingInput'] != "":
            seguiCL = SeguimientoController()
            data = seguiCL.seguimientoData(request.form['floatingInput'])
            #print("DATA ROUTES: " + str(data))
            cont = len(data[1])
            fecha_actual = datetime.now()
            locale.setlocale(locale.LC_TIME, 'es_ES')
            fecha_string = fecha_actual.strftime("%A, %d %B %Y")
            print(data[1])
            return render_template('index.html', hbl = data[0], cont = cont , containers = data[1], fechaActual = fecha_string)
        else:
            return render_template('index.html')
    else:
        return render_template('index.html')

def pagina_no_encontrada(error):
    return render_template('404.html'), 404