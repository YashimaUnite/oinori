import { z } from "zod";

import TrackLane, { TrackLaneProps } from "../TrackLane";

const MultiTrackSchema = z.object({
  lanes: z.array(z.object({
    id: z.number().describe("LaneID"),
    name: z.string().describe("LaneName")
  }))
});
type MultiTrackProps = z.infer<typeof MultiTrackSchema>;

class MultiTrack extends TrackLane  {
  lanes: TrackLane[];
  constructor({ id = 0, name = "1", lanes = [] }: { id?: number, name?: string, lanes?: TrackLaneProps[] } = {}) {
    super({ id, name });
    this.lanes = lanes.map((laneProps) => new TrackLane(laneProps));
  }
}

const lanes = Array.from({ length: 8 }, (_, i) => ({ id: `${i}`, name: `Lane ${i + 1}` }));

export default MultiTrack;
