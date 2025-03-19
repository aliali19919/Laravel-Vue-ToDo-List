<?php

namespace App\Http\Controllers;

use App\Models\Task;
use App\Http\Requests\StoreTaskRequest;
use App\Http\Requests\UpdateTaskRequest;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Task::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTaskRequest $request)
    {
    $input=$request->all();
    $task= Task::create($input);
    return["task"=>$task];

    }

    /**
     * Display the specified resource.
     */
    public function show(Task $task)
    {

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTaskRequest $request, Task $task)
    {
        Task::findOrFail($task->id)->update(["is_checked"=>$request->is_checked]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Task $task)
    {
       return Task::findOrFail($task->id)->delete();
    }
}
