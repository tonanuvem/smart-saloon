<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Appointments;

class AppointmentsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Appointments::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $returnAppointments  = Appointments::all();
        foreach ($returnAppointments as $key => $value) {
            if($value["id_client"] == $request["id_client"] && $value["date_current"] == $request["date_current"]) {
                return array(
                    "status" => "error",
                    "message" => "O cliente já possui esse mesmo horário agendado"
                );
            }
            if($value["id_employee"] == $request["id_employee"] && $value["date_current"] == $request["date_current"]) {
                return array(
                    "status" => "error",
                    "message" => "O funcionário já possui esse mesmo horário agendado"
                );
            }
        }

        $saved = Appointments::create($request->all());
        if ($saved) {
            return array(
                "status" => "success",
                "data" => $saved->fresh()
            );
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {
        // $returnAppointments  = Appointments::all();
        // foreach ($returnAppointment as $value) {
        //     if ($idEmployee === $value->id_employee) {
        //         return $value;
        //     }
        //     if ($idClient === $value->id_client) {
        //         return $value;
        //     }
        // }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $client = Appointments::findOrFail($id);
        $client->delete();
    }
}
