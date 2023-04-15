import { z } from "zod";

const TerminalSchema = z.object({
  id: z.number().describe("UniqueTrackID"),
  name: z.string().describe("TrackName"),
  created: z.date().describe("TrackCreatedDate")
});
type TerminalProps = z.infer<typeof TerminalSchema>;

class Terminal {
  props: TerminalProps;
  constructor(props: TerminalProps = { id: 0, name: "new Term", created: new Date() }, defaultProps: TerminalProps[] = []) {
    const defaultValues = defaultProps[props.id % defaultProps.length];
    const { id = defaultValues?.id ?? 1, name = defaultValues?.name ?? "new Term", created = defaultValues?.created ?? new Date() } = props;
    this.props = { id, name, created };
  }
}

export default Terminal;