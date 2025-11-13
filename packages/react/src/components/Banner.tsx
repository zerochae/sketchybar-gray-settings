import { css } from "@sketchybar-gray/panda/css";

const header = {
  calvin_s: `┌─┐┬─┐┌─┐┬ ┬   ┌─┐┬┌─┌─┐┌┬┐┌─┐┬ ┬┬ ┬   ┌┐ ┌─┐┬─┐
│ ┬├┬┘├─┤└┬┘───└─┐├┴┐├┤  │ │  ├─┤└┬┘───├┴┐├─┤├┬┘
└─┘┴└─┴ ┴ ┴    └─┘┴ ┴└─┘ ┴ └─┘┴ ┴ ┴    └─┘┴ ┴┴└─
`,
  future: `┏━╸┏━┓┏━┓╻ ╻   ┏━┓╻┏ ┏━╸╺┳╸┏━╸╻ ╻╻ ╻   ┏┓ ┏━┓┏━┓
┃╺┓┣┳┛┣━┫┗┳┛╺━╸┗━┓┣┻┓┣╸  ┃ ┃  ┣━┫┗┳┛╺━╸┣┻┓┣━┫┣┳┛
┗━┛╹┗╸╹ ╹ ╹    ┗━┛╹ ╹┗━╸ ╹ ┗━╸╹ ╹ ╹    ┗━┛╹ ╹╹┗╸
`,
};

export default function Banner() {
  return (
    <div
      className={css({
        marginBottom: "24px",
        padding: "16px",
        background: "bg2",
        border: "1px solid token(colors.border)",
        borderRadius: "4px",
        fontSize: "10px",
        lineHeight: "1.2",
        color: "blue",
        whiteSpace: "pre",
        overflow: "hidden",
      })}
    >
      {header.future}
    </div>
  );
}
