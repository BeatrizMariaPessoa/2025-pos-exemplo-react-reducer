'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dispatch, useState } from 'react';
import { TasksAction } from '@/types/task';

export function AddTask({ dispatch }: { dispatch: Dispatch<TasksAction> }) {
  const [text, setText] = useState('');

  function handleAddTask() {
    if (text.trim()) {
      dispatch({
        type: 'added',
        id: Date.now(),
        text: text,
      });
      setText('');
    }
  }

  return (
    <div className="flex gap-2 mb-6">
      <Input
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleAddTask()}
      />
      <Button onClick={handleAddTask}>Add</Button>
    </div>
  );
}