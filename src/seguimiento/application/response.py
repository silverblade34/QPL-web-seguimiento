import requests
import json
class SeguimientoResponse:
    def __init__(self):
        pass

    def parsedData(self, inputhbl):
        datahbl = self.conexionTrack(inputhbl)
        #print("DATAHBL : " + str(datahbl))
        datacontainers = self.conexionContainers(datahbl)
        #print("DATA CONTAINERS : " + str(datacontainers))
        return datahbl, datacontainers


    def conexionTrack(self, inputhbl):
        headers={
            "Content-Type" : "application/json",
            "Authorization" : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjEwMDAxfQ"
            }
        data = {
                "vch_BLH_Ref":f"{inputhbl}"
            }
        datap = json.dumps(data)
        response = requests.post(f'http://qplsac.dyndns.org:3011/api/v1/track/search', datap , headers = headers )
        raw = response.json()
        return raw
    
    def conexionContainers(self, datahbl):
        headers={
            "Content-Type" : "application/json",
            "Authorization" : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjEwMDAxfQ"
            }
        data = {
                "vch_Num_Ref": datahbl['vch_Num_Ref'],
                "vch_Sec_Ref": datahbl['vch_Sec_Ref'],
                "chr_IoE_Ref": datahbl['chr_IoE_Ref'],
                "chr_Ori_Con": datahbl['chr_Ori_Con']
            }
        datap = json.dumps(data)
        response = requests.post(f'http://qplsac.dyndns.org:3011/api/v1/containers/search', datap , headers=headers )
        raw = response.json()
        return raw