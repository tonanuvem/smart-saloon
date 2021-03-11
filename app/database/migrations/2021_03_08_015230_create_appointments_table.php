<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAppointmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('appointments', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('id_client')->unsigned();
            $table->string('name_client');
            $table->foreign('id_client')->references('id')->on('clients');
            $table->string('name_employee');
            $table->bigInteger('id_employee')->unsigned();
            $table->foreign('id_employee')->references('id')->on('employees');
            $table->dateTime('date_current');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('appointments');
    }
}
