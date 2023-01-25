function setNullInformation(numbertrack) {
    const contentHTML = `<div class="m-0">
    <!--begin::Label-->
    <div class="fw-bolder fs-3 text-gray-800 mb-8">
        <h1 style="color: #2c8d51;">Resultado</h1>
    </div>
    <div class="d-flex flex-row-fluid align-items-center"><p style="color:#b6b6b6; font-size:14px;">No se ha encontrado información para el <b>N° HB/L: </b></p><p style="font-size:18px;"> &nbsp;&nbsp;${numbertrack}.</p></div>
    <!--end::Label-->
    
    

</div>`
    document.getElementById("contentHTML").innerHTML = contentHTML;

}

//CLX21101513-3

function setInformation(hbl, containers) {
    const fechaActual = moment().locale('es').format("LLLL");

    let containersHTML = "";
    if (containers.length > 0) {
        for (const x of containers) {
            containersHTML += `<span class="svg-icon svg-icon-1"><img class="img-fluid h-15px" src="./img/container.svg"></span>&nbsp;&nbsp;${x.vch_Num_Con}<br/>`;
        }
    } else {
        containersHTML = `No se encontraron contenedores pendientes<br/>`;
    }

    const contentHTML = `<div class="m-0">
    <!--begin::Label-->
    <div class="fw-bolder fs-3 text-gray-800 mb-8">
        <h1 style="color: #2c8d51;">Resultado</h1>
    </div>
    <div class="fw-bolder fs-3 text-gray-800 mb-8">Tracking #${hbl.vch_BLH_Ref}</div>
    <!--end::Label-->
    <!--begin::Row-->
    <div class="row g-5 mb-11">
        <!--end::Col-->
        <div class="col-xl-3">
            <!--end::Label-->
            <div class="fw-bold fs-7 text-gray-600 mb-1">Fecha de Consulta:</div>
            <!--end::Label-->
            <!--end::Col-->
            <div class="fw-bolder fs-6 text-gray-800">${fechaActual}</div>
            <!--end::Col-->
        </div>
        <!--end::Col-->
        <!--end::Col-->
        <div class="col-xl-3">
            <!--end::Label-->
            <div class="fw-bold fs-7 text-gray-600 mb-1">N° HB/L:</div>
            <!--end::Label-->
            <!--end::Info-->
            <div class="fw-bolder fs-6 text-gray-800 d-flex align-items-center flex-wrap">
                <span class="pe-2">${hbl.vch_BLH_Ref}</span>
            </div>
            <!--end::Info-->
        </div>
        <div class="col-xl-3">
            <!--end::Label-->
            <div class="fw-bold fs-7 text-gray-600 mb-1">Línea:</div>
            <!--end::Label-->
            <!--end::Info-->
            <div class="fw-bolder fs-6 text-gray-800 d-flex align-items-center flex-wrap">
                <span class="pe-2">${hbl.vch_Nom_Lin}</span>
            </div>
            <!--end::Info-->
        </div>
        <div class="col-xl-3">
            <!--end::Label-->
            <div class="fw-bold fs-7 text-gray-600 mb-1">Nave:</div>
            <!--end::Label-->
            <!--end::Info-->
            <div class="fw-bolder fs-6 text-gray-800 d-flex align-items-center flex-wrap">
                <span class="pe-2">${hbl.vch_Nom_Nav}</span>

            </div>
            <!--end::Info-->
        </div>
        <!--end::Col-->
    </div>
    <!--end::Row-->
    <!--begin::Row-->
    <div class="row g-5 mb-12">
        <!--end::Col-->
        <div class="col-xl-3">
            <!--end::Label-->
            <div class="fw-bold fs-7 text-gray-600 mb-1">Modo:</div>
            <!--end::Label-->
            <!--end::Text-->
            <div class="fw-bolder fs-6 text-gray-800 d-flex align-items-center flex-wrap">
                <span class="pe-2" style="color: #2c8d51;">${hbl.chr_IoE_Ref == "E" ? "Exportación" : "Importación"}</span>

            </div>
        </div>
        <div class="col-xl-3">
            <!--end::Label-->
            <div class="fw-bold fs-7 text-gray-600 mb-1">POL:</div>
            <!--end::Label-->
            <!--end::Text-->
            <div class="fw-bolder fs-6 text-gray-800 d-flex align-items-center flex-wrap">
                <span class="pe-2">${hbl.vch_Por_Ref}</span>

            </div>
        </div>
        <div class="col-xl-6">
            <!--end::Label-->
            <div class="fw-bold fs-7 text-gray-600 mb-1">POD:</div>
            <!--end::Label-->
            <!--end::Text-->
            <div class="fw-bolder fs-6 text-gray-800 d-flex align-items-center flex-wrap">
                <span class="pe-2">${hbl.vch_Pde_Ref}</span>

            </div>
        </div>

        <div class="col-sm-3">
            <!--end::Label-->
            <div class="fw-bold fs-7 text-gray-600 mb-1">Cliente:</div>
            <!--end::Label-->
            <!--end::Text-->
            <div class="fw-bolder fs-6 text-gray-800 d-flex align-items-center flex-wrap">
                <span class="pe-2" style="font-size: 20px;">${hbl.vch_Nom_Cli}</span>

            </div>
            </br>
        </div>

        <div class="row d-flex flex-column ">
            <div class="col-xl-3 d-flex flex-row align-items-center mb-2">
                <!--end::Label-->
                <div class="fw-bold fs-7 text-gray-600">
                    <span class="pe-2">Fecha de ${hbl.chr_IoE_Ref == "E" ? "Zarpe" : "Llegada"}:</span>
                </div>
                <!--end::Label-->
                <!--end::Text-->
                <div class="fw-bolder fs-6 text-gray-800 d-flex align-items-center flex-wrap">
                    <span class="pe-2" style="font-size: 16px;">${hbl.sdt_FNA_Ref}</span>

                </div>
            </div>


            <div class="col-xl-3 d-flex flex-row align-items-center mb-2">
                <!--end::Label-->
                <div class="fw-bold fs-7 text-gray-600"><span class="pe-2">Fecha de Transbordo:</span></div>
                <!--end::Label-->
                <!--end::Text-->
                <div class="fw-bolder fs-6 text-gray-800 d-flex align-items-center flex-wrap">
                    <span class="pe-2" style="font-size: 16px;">${hbl.sdt_FTR_Ref ?? "-"}</span>

                </div>
            </div>

            <div class="col-xl-3 d-flex flex-row align-items-center mb-2">
                <!--end::Label-->
                <div class="fw-bold fs-7 text-gray-600 mb-1"><span class="pe-2">Fecha estimada de Arribo:</span></div>
                <!--end::Label-->
                <!--end::Text-->
                <div class="fw-bolder fs-6 text-gray-800 d-flex align-items-center flex-wrap">
                    <span class="pe-2" style="font-size: 16px;">${hbl.sdt_FES_Ref}</span>

                </div>
            </div>
            </br>
        </div>


        <div class="row d-flex flex-column">
            <div class="col-sm-3">

                <div class="fw-bold fs-7 text-gray-600 mb-1">
                    <p style="font-size: 18px;color:#556c81;font-weight: bold;">Contenedores:</p>
                </div>

                <div class="fw-bold fs-7 text-gray-600">${containersHTML}
                    </div>
            </div>
        </div>


    </div>
    <!--end::Row-->

</div>`;

    document.getElementById("contentHTML").innerHTML = contentHTML;
}

function getHBL(inputhbl) {
    return new Promise(async(resolve, reject) => {
        $.ajax({
            type: "POST",
            url: "./getHBL.php",
            data: {
                "inputhbl": inputhbl
            },
            success: function(data) {
                try {
                    console.log("Data: " + data)
                    const parsed = JSON.parse(data);
                    resolve(parsed);
                } catch (err) {
                    resolve(null);
                }

            },
            error: function(err) {
                reject(err);
            }
        });
    });
}

function getContainers(hbl) {
    return new Promise(async(resolve, reject) => {
        $.ajax({
            type: "POST",
            url: "./getContainers.php",
            data: {
                "vch_Num_Ref": hbl.vch_Num_Ref,
                "vch_Sec_Ref": hbl.vch_Sec_Ref,
                "chr_IoE_Ref": hbl.chr_IoE_Ref,
                "chr_Ori_Con": hbl.chr_Ori_Con
            },
            success: function(data) {

                const parsed = JSON.parse(data);
                resolve(parsed);
            },
            error: function(err) {

                reject(err);
            }
        });
    });
}

async function searchPed() {
    const inputhbl = document.getElementById("floatingInput").value;
    try {
        const hbl = await getHBL(inputhbl);

        if (hbl != null) {
            const containers = await getContainers(hbl);
            setInformation(hbl, containers);
        } else {
            throw "No se encontró el pedido";
        }

    } catch (err) {
        console.log(err);
        setNullInformation(inputhbl);
    }
}