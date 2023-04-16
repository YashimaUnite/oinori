import { z } from "zod";

export const TrackLaneSchema = z.object({
  id: z.number().describe("UniqueLaneID"),
  name: z.string().describe("LaneName"),
});
export type TrackLaneProps = z.infer<typeof TrackLaneSchema>;

export class TrackLane {
  props: TrackLaneProps;
  constructor(props: TrackLaneProps = { id: 0, name: "" })
  {
    const index = props.id;
    const defaultName = `Lane ${index + 1}`;
    this.props = { ...props, name: props.name ?? defaultName };
  }
}

export default TrackLane;