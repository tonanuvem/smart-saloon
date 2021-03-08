<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Employee;

class EmployeeController extends Controller
{
    public function index()
    {
        return Employee::all();
    }

    public function store(Request $request)
    {
        $saved = Employee::create($request->all());
        if ($saved) {
            return array(
                "status" => "success",
                "data" => $saved->fresh()
            );
        }
    }

    public function show($id)
    {
        return Employee::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $employee = Employee::findOrFail($id);
        $employee->update($request->all());
        if ($employee) {
            return array(
                "status" => "success",
                "data" => $employee->fresh()
            );
        }
    }

    public function destroy($id)
    {
        $employee = Employee::findOrFail($id);
        $employee->delete();
        if ($employee) {
            return array(
                "status" => "success"
            );
        }
    }
}
