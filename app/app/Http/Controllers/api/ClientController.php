<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Client;

class ClientController extends Controller
{
    public function index()
    {
        return Client::all();
    }

    public function store(Request $request)
    {
        $saved = Client::create($request->all());
        if ($saved) {
            return array(
                "status" => "success",
                "data" => $saved->fresh()
            );
        }
    }

    public function show($id)
    {
        return Client::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $client = Client::findOrFail($id);
        $client->update($request->all());
        if ($client) {
            return array(
                "status" => "success",
                "data" => $client->fresh()
            );
        }
    }

    public function destroy($id)
    {
        $client = Client::findOrFail($id);
        $client->delete();
        if ($client) {
            return array(
                "status" => "success"
            );
        }
    }
}
