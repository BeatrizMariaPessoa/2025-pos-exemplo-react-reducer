'use client';

import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Dispatch } from 'react';
import { TasksAction, Task } from '@/types/task';

export function TaskList({
  tasks,
  dispatch,
}: {
  tasks: Task[];
  dispatch: Dispatch<TasksAction>;
}) {
  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <Card key={task.id}>
          <CardContent className="pt-6">
            <div className="flex items-center space-x-4">
              <Checkbox
                id={`task-${task.id}`}
                checked={task.done}
                onCheckedChange={(checked) =>
                  dispatch({
                    type: 'changed',
                    task: {
                      ...task,
                      done: Boolean(checked),
                    },
                  })
                }
              />
              <Label
                htmlFor={`task-${task.id}`}
                className={task.done ? 'line-through' : ''}
              >
                {task.text}
              </Label>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end gap-2">
            <Link href={`/todos/edit/${task.id}`}>
              <Button variant="outline">Edit</Button>
            </Link>
            <Button
              variant="destructive"
              onClick={() =>
                dispatch({
                  type: 'deleted',
                  id: task.id,
                })
              }
            >
              Delete
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}