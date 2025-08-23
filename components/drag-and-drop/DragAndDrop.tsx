"use client";

import { FC, useState } from "react";
import {
  Active,
  DndContext,
  Over,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { arrayMove, SortableContext } from "@dnd-kit/sortable";
import { DragItem } from "@/types";

type DragAndDropProps = {
  items: DragItem[];
};

const DragAndDrop: FC<DragAndDropProps> = ({ items = [] }) => {
  const [order, setOrder] = useState(items);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  const handleDragEnd = (event: {
    active: Active | null;
    over: Over | null;
  }) => {
    const { active, over } = event;
    if (!over?.id) return;
    if (active?.id && over?.id && active?.id !== over?.id) {
      setOrder((items) => {
        const oldIndex = items.findIndex((item) => item?.id === active?.id);
        const newIndex = items.findIndex((item) => item?.id === over?.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
      <SortableContext items={order?.map((item) => item?.id)}>
        {order?.map((item) => item?.component)}
      </SortableContext>
    </DndContext>
  );
};

export default DragAndDrop;
