<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

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
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Appointments::create($request->all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $idClient   = $request->id_client;
        $idEmployee = $request->id_employee;
        $date       = $request->date_current;

        $returnAppointments  = Appointments::all();
        foreach ($returnAppointment as $value) {
            
            if ($idEmployee === $value->id_employee) {
                if ($date !== $value->date_current) {
                    Appointments::create($request);
                }
            }
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
        $returnAppointments  = Appointments::all();
        foreach ($returnAppointment as $value) {
            if ($idEmployee === $value->id_employee) {
                return $value;
            }
            if ($idClient === $value->id_client) {
                return $value;
            }
        }
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
