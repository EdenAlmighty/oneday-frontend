import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { AvatarGroup } from '@mui/material';


export function LogoFull() {
  return (
    <svg viewBox="0 0 130 63">
      <path fillRule="currentColor" d="M64.267 42h-.3V0h40.546v42Zm7.244-7.411h25.454v-9.883H71.511Zm0-17.294h25.454V7.411H71.511ZM16.091 42v-7.412h32.7v-9.882h-32.7v-7.412h32.7V7.411h-32.7V0h40.245v42ZM1 42V0h7.546v42Z" />
      <path fillRule="#ff521c" d="M112 0h18v18h-18z" />
      <text fillRule="#fff" fontFamily="Bahnschrift" fontSize="10" letterSpacing=".03em" transform="translate(121 12)"><tspan x="-6.048" y="0">TH</tspan></text>
      <text fontFamily="Bahnschrift" fontSize="14" fontWeight="700" letterSpacing=".796em" transform="translate(0 60)"><tspan x="0" y="0">STREET</tspan></text>
    </svg>
  )
}

export function Search() {
  return (
    <svg viewBox="0 0 21.207 21.207"><g fillRule="none" stroke="currentColor" strokeWidth="2" transform="translate(.477)"><circle cx="8" cy="8" r="8" stroke="none" /><circle cx="8" cy="8" r="7" /></g><path fillRule="none" stroke="currentColor" strokeWidth="2" d="m15.5 15.5 5 5" data-name="Line 1" /></svg>
  )
}

export function ArrowLeft() {
  return (
    <svg viewBox="0 0 6 10.572"><path fillRule="currentColor" d="m2.148 5.286 3.62-3.925a.8.8 0 0 0 0-1.124.787.787 0 0 0-1.118 0L.232 4.727a.8.8 0 0 0 0 1.125l4.418 4.49a.785.785 0 0 0 1.118 0 .8.8 0 0 0 0-1.124Z" /></svg>
  )
}

export function ArrowRight() {
  return (
    <svg viewBox="0 0 6 10.572"><path fillRule="currentColor" d="M3.856 5.286.232 1.361a.8.8 0 0 1 0-1.124.787.787 0 0 1 1.118 0l4.418 4.49a.8.8 0 0 1 0 1.125l-4.42 4.486a.785.785 0 0 1-1.118 0 .8.8 0 0 1 0-1.124Z" /></svg>
  )
}

export function Home() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" style={{marginRight: "0.5em"}} width="18" height="18" aria-hidden="true" className="icon_90dcd5fe7a noFocusStyle_770b8cdd79" data-testid="icon"><path d="M9.56992 2.1408C9.82591 1.95307 10.1741 1.95307 10.4301 2.1408L17.7028 7.47413C17.8896 7.61113 18 7.82894 18 8.06061V16.7879C18 17.1895 17.6744 17.5152 17.2727 17.5152H11.9394C11.5377 17.5152 11.2121 17.1895 11.2121 16.7879V13.1515H8.78788V16.7879C8.78788 17.1895 8.46227 17.5152 8.06061 17.5152H2.72727C2.32561 17.5152 2 17.1895 2 16.7879V8.06061C2 7.82894 2.11037 7.61113 2.29719 7.47413L9.56992 2.1408ZM3.45455 8.42914V16.0606H7.33333V12.4242C7.33333 12.0226 7.65894 11.697 8.06061 11.697H11.9394C12.3411 11.697 12.6667 12.0226 12.6667 12.4242V16.0606H16.5455V8.42914L10 3.62914L3.45455 8.42914Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
  )
}

export function MyWork() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" style={{marginRight: "0.5em"}} width="20" height="20" aria-hidden="true" className="icon_90dcd5fe7a icon_90dcd5fe7a noFocusStyle_770b8cdd79" data-testid="icon"><path d="M5.99986 1.82129C6.41407 1.82129 6.74986 2.15708 6.74986 2.57129V4.10701H13.2499V2.57129C13.2499 2.15708 13.5856 1.82129 13.9999 1.82129C14.4141 1.82129 14.7499 2.15708 14.7499 2.57129V4.107H16.2856C16.7876 4.107 17.269 4.30643 17.624 4.66141C17.979 5.01639 18.1784 5.49784 18.1784 5.99986V16.2856C18.1784 16.7876 17.979 17.269 17.624 17.624C17.269 17.979 16.7876 18.1784 16.2856 18.1784H3.71415C3.21213 18.1784 2.73067 17.979 2.37569 17.624C2.02071 17.269 1.82129 16.7876 1.82129 16.2856V5.99986C1.82129 5.49784 2.02071 5.01639 2.37569 4.66141C2.73067 4.30643 3.21213 4.107 3.71415 4.107C3.763 4.107 3.81077 4.11168 3.85702 4.1206C3.90326 4.11168 3.95102 4.10701 3.99986 4.10701H5.24986V2.57129C5.24986 2.15708 5.58565 1.82129 5.99986 1.82129ZM5.24986 7.14272V5.60701H3.99986C3.95101 5.60701 3.90324 5.60234 3.85699 5.59342C3.81075 5.60233 3.76299 5.607 3.71415 5.607C3.60995 5.607 3.51003 5.64839 3.43635 5.72207C3.36268 5.79574 3.32129 5.89567 3.32129 5.99986V16.2856C3.32129 16.3898 3.36268 16.4897 3.43635 16.5634C3.51003 16.637 3.60995 16.6784 3.71415 16.6784H16.2856C16.3898 16.6784 16.4897 16.637 16.5634 16.5634C16.637 16.4897 16.6784 16.3898 16.6784 16.2856V5.99986C16.6784 5.89567 16.637 5.79574 16.5634 5.72207C16.4897 5.64839 16.3898 5.607 16.2856 5.607H14.7499V7.14272C14.7499 7.55693 14.4141 7.89272 13.9999 7.89272C13.5856 7.89272 13.2499 7.55693 13.2499 7.14272V5.60701H6.74986V7.14272C6.74986 7.55693 6.41407 7.89272 5.99986 7.89272C5.58565 7.89272 5.24986 7.55693 5.24986 7.14272ZM13.4214 9.92231C13.6942 9.61058 13.6626 9.13676 13.3509 8.864C13.0392 8.59124 12.5653 8.62283 12.2926 8.93455L8.75058 12.9825L7.02129 11.6856C6.68992 11.437 6.21982 11.5042 5.97129 11.8356C5.72276 12.1669 5.78992 12.637 6.12129 12.8856L8.407 14.5999C8.72086 14.8353 9.16309 14.789 9.42144 14.4937L13.4214 9.92231Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
  )
}

export function Home2() {
  return (
    <svg className="house-svg" position="absolute" width="20" height="20" viewBox="0 0 20 20" fillRule="black" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M11 5.94634C11 5.88904 10.9868 5.83251 10.9615 5.78109C10.9362 5.72967 10.8995 5.68473 10.8541 5.64972L6.72913 2.46222C6.66342 2.41138 6.5827 2.38379 6.49962 2.38379C6.41655 2.38379 6.33583 2.41138 6.27012 2.46222L2.14513 5.64972C2.0999 5.68481 2.06331 5.72978 2.03815 5.7812C2.013 5.83261 1.99995 5.8891 2 5.94634V12.0088C2 12.1083 2.03951 12.2037 2.10984 12.274C2.18016 12.3443 2.27554 12.3838 2.375 12.3838H5.375C5.42473 12.3838 5.47242 12.3641 5.50758 12.3289C5.54275 12.2938 5.5625 12.2461 5.5625 12.1963V9.50884C5.5625 9.2602 5.66127 9.02175 5.83709 8.84593C6.0129 8.67011 6.25136 8.57134 6.5 8.57134C6.74864 8.57134 6.9871 8.67011 7.16291 8.84593C7.33873 9.02175 7.4375 9.2602 7.4375 9.50884V12.1963C7.4375 12.2461 7.45725 12.2938 7.49242 12.3289C7.52758 12.3641 7.57527 12.3838 7.625 12.3838H10.625C10.7245 12.3838 10.8198 12.3443 10.8902 12.274C10.9605 12.2037 11 12.1083 11 12.0088V5.94634Z" ></path></svg>
  )
}

export function ThreePoints() {
  return (
    <svg className="relative" width="20" height="20" viewBox="0 0 20 20" fillRule="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M6 10.5C6 11.3284 5.32843 12 4.5 12C3.67157 12 3 11.3284 3 10.5C3 9.67157 3.67157 9 4.5 9C5.32843 9 6 9.67157 6 10.5Z"></path><path d="M11.8333 10.5C11.8333 11.3284 11.1618 12 10.3333 12C9.50492 12 8.83334 11.3284 8.83334 10.5C8.83334 9.67157 9.50492 9 10.3333 9C11.1618 9 11.8333 9.67157 11.8333 10.5Z"></path><path d="M17.6667 10.5C17.6667 11.3284 16.9951 12 16.1667 12C15.3383 12 14.6667 11.3284 14.6667 10.5C14.6667 9.67157 15.3383 9 16.1667 9C16.9951 9 17.6667 9.67157 17.6667 10.5Z"></path></svg>
  )
}

export function CloseSidebar() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fillRule="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.5303 9.46967L12 10L12.5303 10.5303C12.8232 10.2374 12.8232 9.76256 12.5303 9.46967ZM10.9393 10L7.46967 13.4697C7.17678 13.7626 7.17678 14.2374 7.46967 14.5303C7.76256 14.8232 8.23744 14.8232 8.53033 14.5303L12.5303 10.5303L12 10L12.5303 9.46967L8.53033 5.46967C8.23744 5.17678 7.76256 5.17678 7.46967 5.46967C7.17678 5.76256 7.17678 6.23744 7.46967 6.53033L10.9393 10Z"></path></svg>
  )
}

export function OpenSidebar() {
  return (
    <svg style={{ transform: "rotate(180deg)" }} width="20" height="20" viewBox="0 0 20 20" fillRule="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.5303 9.46967L12 10L12.5303 10.5303C12.8232 10.2374 12.8232 9.76256 12.5303 9.46967ZM10.9393 10L7.46967 13.4697C7.17678 13.7626 7.17678 14.2374 7.46967 14.5303C7.76256 14.8232 8.23744 14.8232 8.53033 14.5303L12.5303 10.5303L12 10L12.5303 9.46967L8.53033 5.46967C8.23744 5.17678 7.76256 5.17678 7.46967 5.46967C7.17678 5.76256 7.17678 6.23744 7.46967 6.53033L10.9393 10Z"></path></svg>
  )
}

export function SearchTool() {
  return (
    <svg position="absolute" top="164px" right="231px" width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M8.65191 2.37299C6.9706 2.37299 5.35814 3.04089 4.16927 4.22976C2.9804 5.41863 2.3125 7.03108 2.3125 8.7124C2.3125 10.3937 2.9804 12.0062 4.16927 13.195C5.35814 14.3839 6.9706 15.0518 8.65191 15.0518C10.0813 15.0518 11.4609 14.5691 12.5728 13.6939L16.4086 17.5303C16.7014 17.8232 17.1763 17.8232 17.4692 17.5303C17.7621 17.2375 17.7622 16.7626 17.4693 16.4697L13.6334 12.6333C14.5086 11.5214 14.9913 10.1418 14.9913 8.7124C14.9913 7.03108 14.3234 5.41863 13.1346 4.22976C11.9457 3.04089 10.3332 2.37299 8.65191 2.37299ZM12.091 12.1172C12.9878 11.2113 13.4913 9.98783 13.4913 8.7124C13.4913 7.42891 12.9815 6.19798 12.0739 5.29042C11.1663 4.38285 9.9354 3.87299 8.65191 3.87299C7.36842 3.87299 6.1375 4.38285 5.22993 5.29042C4.32237 6.19798 3.8125 7.42891 3.8125 8.7124C3.8125 9.99589 4.32237 11.2268 5.22993 12.1344C6.1375 13.0419 7.36842 13.5518 8.65191 13.5518C9.92736 13.5518 11.1509 13.0483 12.0568 12.1514C12.0623 12.1455 12.0679 12.1397 12.0737 12.134C12.0794 12.1283 12.0851 12.1227 12.091 12.1172Z"></path></svg>
  )
}

export function PlusTool() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20" aria-hidden="true" className="icon_90dcd5fe7a noFocusStyle_770b8cdd79" data-testid="icon"><path d="M10.75 3C10.75 2.58579 10.4142 2.25 10 2.25C9.58579 2.25 9.25 2.58579 9.25 3V9.25H3C2.58579 9.25 2.25 9.58579 2.25 10C2.25 10.4142 2.58579 10.75 3 10.75H9.25V17C9.25 17.4142 9.58579 17.75 10 17.75C10.4142 17.75 10.75 17.4142 10.75 17V10.75H17C17.4142 10.75 17.75 10.4142 17.75 10C17.75 9.58579 17.4142 9.25 17 9.25H10.75V3Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>)
}

export function InviteIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd"
        d="M7.27093 2.34404C7.7399 2.14979 8.24254 2.0498 8.75015 2.0498C9.25776 2.0498 9.7604 2.14979 10.2294 2.34404C10.6983 2.53829 11.1245 2.82302 11.4834 3.18195C11.8423 3.54088 12.127 3.967 12.3213 4.43597C12.5156 4.90494 12.6155 5.40758 12.6155 5.91519C12.6155 6.4228 12.5156 6.92544 12.3213 7.39441C12.127 7.86338 11.8423 8.28949 11.4834 8.64843C11.1245 9.00736 10.6983 9.29208 10.2294 9.48634C9.7604 9.68059 9.25776 9.78057 8.75015 9.78057C8.24254 9.78057 7.7399 9.68059 7.27093 9.48634C6.80196 9.29209 6.37584 9.00736 6.01691 8.64843C5.65798 8.28949 5.37325 7.86338 5.179 7.39441C4.98475 6.92544 4.88477 6.4228 4.88477 5.91519C4.88477 5.40758 4.98475 4.90494 5.179 4.43597C5.37325 3.967 5.65798 3.54088 6.01691 3.18195C6.37584 2.82302 6.80196 2.53829 7.27093 2.34404ZM8.75015 3.5498C8.43952 3.5498 8.13194 3.61099 7.84496 3.72986C7.55797 3.84873 7.29722 4.02296 7.07757 4.24261C6.85792 4.46226 6.68369 4.72301 6.56482 5.01C6.44595 5.29698 6.38477 5.60456 6.38477 5.91519C6.38477 6.22582 6.44595 6.5334 6.56482 6.82038C6.68369 7.10736 6.85792 7.36812 7.07757 7.58777C7.29722 7.80742 7.55798 7.98165 7.84496 8.10052C8.13194 8.21939 8.43952 8.28057 8.75015 8.28057C9.06078 8.28057 9.36836 8.21939 9.65534 8.10052C9.94232 7.98165 10.2031 7.80742 10.4227 7.58777C10.6424 7.36812 10.8166 7.10736 10.9355 6.82038C11.0544 6.5334 11.1155 6.22582 11.1155 5.91519C11.1155 5.60456 11.0544 5.29698 10.9355 5.01C10.8166 4.72301 10.6424 4.46226 10.4227 4.24261C10.2031 4.02296 9.94233 3.84873 9.65534 3.72986C9.36836 3.61099 9.06078 3.5498 8.75015 3.5498Z" />
      <path
        d="M8.33935 10.7312C8.3512 10.7307 8.36306 10.7305 8.37491 10.7305H9.12469C9.13838 10.7305 9.15198 10.7308 9.1655 10.7314C9.7888 10.7566 10.4024 10.8595 10.9888 11.0353C11.4913 11.1859 11.4963 11.8685 11.0942 12.2054C10.9063 12.3628 10.6558 12.4142 10.4202 12.3465C9.99646 12.2249 9.55476 12.1529 9.10634 12.1337H8.39335C7.53853 12.1703 6.70811 12.3988 5.97999 12.7977C5.24701 13.1992 4.64204 13.7602 4.22255 14.4273C3.80542 15.0907 3.58548 15.8372 3.58328 16.5965H9.12469L9.12963 16.5965H9.21466C9.47166 16.5965 9.69353 16.7699 9.78802 17.0089C9.96102 17.4465 9.67351 17.9997 9.203 17.9997H9.12509L9.12014 17.9997H2.79163C2.35443 17.9997 2 17.6856 2 17.2981V16.6097C1.9997 15.6068 2.2887 14.6203 2.83955 13.7443C3.39044 12.8682 4.18491 12.1314 5.14751 11.6041C6.1101 11.0767 7.20884 10.7762 8.33935 10.7312Z" />
      <path
        d="M14.7002 11.5C15.1144 11.5 15.4502 11.8358 15.4502 12.25V14H17.2002C17.6144 14 17.9502 14.3358 17.9502 14.75C17.9502 15.1642 17.6144 15.5 17.2002 15.5H15.4502V17.25C15.4502 17.6642 15.1144 18 14.7002 18C14.286 18 13.9502 17.6642 13.9502 17.25V15.5H12.2002C11.786 15.5 11.4502 15.1642 11.4502 14.75C11.4502 14.3358 11.786 14 12.2002 14H13.9502V12.25C13.9502 11.8358 14.286 11.5 14.7002 11.5Z" />
    </svg>
  )
}

export function HexSvg() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fillRule="#ffffff" xmlns="http://www.w3.org/2000/svg">
      <path d="M29.004 5.5359L43.0081 13.6211C44.2457 14.3357 45.0081 15.6562 45.0081 17.0852V33.2557C45.0081 34.6848 44.2457 36.0053 43.0081 36.7198L29.004 44.805C27.7664 45.5196 26.2416 45.5196 25.004 44.805L11 36.7198C9.7624 36.0053 9 34.6848 9 33.2557V17.0852C9 15.6562 9.7624 14.3357 11 13.6211L25.004 5.5359C26.2416 4.82137 27.7664 4.82137 29.004 5.5359Z" stroke="#d0d4e4" strokeWidth="2"></path>
    </svg>
  )
}

export function NewTab() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16" aria-hidden="true" aria-label="Open Board in New Tab" className="icon_90dcd5fe7a icon-service-icon noFocusStyle_770b8cdd79" data-testid="icon"><path d="M4.07692 3.75C3.99022 3.75 3.90706 3.78444 3.84575 3.84575C3.78444 3.90706 3.75 3.99022 3.75 4.07692V15.9231C3.75 16.0098 3.78444 16.0929 3.84575 16.1542C3.90706 16.2156 3.99022 16.25 4.07692 16.25H15.9231C16.0098 16.25 16.0929 16.2156 16.1542 16.1542C16.2156 16.0929 16.25 16.0098 16.25 15.9231V11.0769C16.25 10.6627 16.5858 10.3269 17 10.3269C17.4142 10.3269 17.75 10.6627 17.75 11.0769V15.9231C17.75 16.4076 17.5575 16.8723 17.2149 17.2149C16.8723 17.5575 16.4076 17.75 15.9231 17.75H4.07692C3.59239 17.75 3.12771 17.5575 2.78509 17.2149C2.44248 16.8723 2.25 16.4076 2.25 15.9231V4.07692C2.25 3.59239 2.44248 3.12771 2.78509 2.78509C3.12771 2.44248 3.59239 2.25 4.07692 2.25H8.92308C9.33729 2.25 9.67308 2.58579 9.67308 3C9.67308 3.41421 9.33729 3.75 8.92308 3.75H4.07692ZM12.4808 3C12.4808 2.58579 12.8166 2.25 13.2308 2.25H17C17.2005 2.25 17.3825 2.32864 17.5171 2.45675C17.5262 2.46537 17.535 2.47422 17.5436 2.48328C17.6073 2.55021 17.6562 2.62602 17.6904 2.70659C17.7288 2.79671 17.75 2.89588 17.75 3V6.76923C17.75 7.18344 17.4142 7.51923 17 7.51923C16.5858 7.51923 16.25 7.18344 16.25 6.76923V4.81066L10.5303 10.5303C10.2374 10.8232 9.76256 10.8232 9.46967 10.5303C9.17678 10.2374 9.17678 9.76256 9.46967 9.46967L15.1893 3.75H13.2308C12.8166 3.75 12.4808 3.41421 12.4808 3Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
  )
}

export function DeleteSvg() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.30035 1.86462C7.77994 1.86462 7.29477 2.08976 6.94732 2.46719C6.60179 2.84253 6.41724 3.33927 6.41724 3.84552V4.32642H4.901H2.63477C2.22055 4.32642 1.88477 4.6622 1.88477 5.07642C1.88477 5.49063 2.22055 5.82642 2.63477 5.82642H4.151V16.1545C4.151 16.6608 4.33556 17.1575 4.68109 17.5328C5.02853 17.9103 5.51371 18.1354 6.03411 18.1354H13.9659C14.4863 18.1354 14.9715 17.9103 15.3189 17.5328C15.6645 17.1575 15.849 16.6608 15.849 16.1545V5.82642H17.3652C17.7794 5.82642 18.1152 5.49063 18.1152 5.07642C18.1152 4.6622 17.7794 4.32642 17.3652 4.32642H15.099H13.5828V3.84552C13.5828 3.33927 13.3982 2.84253 13.0527 2.46719C12.7053 2.08976 12.2201 1.86462 11.6997 1.86462H8.30035ZM7.16447 5.82642C7.16539 5.82642 7.16631 5.82642 7.16724 5.82642H12.8328C12.8337 5.82642 12.8346 5.82642 12.8356 5.82642H14.349V16.1545C14.349 16.3012 14.2948 16.4306 14.2153 16.5169C14.1378 16.6012 14.0465 16.6354 13.9659 16.6354H6.03411C5.95348 16.6354 5.86223 16.6012 5.78468 16.5169C5.7052 16.4306 5.651 16.3012 5.651 16.1545V5.82642H7.16447ZM12.0828 4.32642V3.84552C12.0828 3.69887 12.0286 3.56943 11.9491 3.4831C11.8716 3.39886 11.7803 3.36462 11.6997 3.36462H8.30035C8.21972 3.36462 8.12847 3.39886 8.05091 3.4831C7.97144 3.56943 7.91724 3.69887 7.91724 3.84552V4.32642L12.0828 4.32642Z"></path>
    </svg>
  )
}

export function RenameSvg() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.8542 3.59561C13.8541 3.59568 13.8542 3.59555 13.8542 3.59561L4.80915 12.6503L3.81363 16.189L7.35682 15.1957L16.4018 6.14C16.4746 6.06722 16.5161 5.96795 16.5161 5.86503C16.5161 5.76221 16.4753 5.6636 16.4026 5.59083C16.4025 5.59076 16.4026 5.59091 16.4026 5.59083L14.4038 3.59568C14.3309 3.52292 14.232 3.48197 14.1289 3.48197C14.026 3.48197 13.927 3.52297 13.8542 3.59561ZM12.8051 2.54754C13.1562 2.19695 13.6324 2 14.1289 2C14.6254 2 15.1016 2.19693 15.4527 2.54747C15.4527 2.5475 15.4527 2.54745 15.4527 2.54747L17.4515 4.54263C17.8026 4.89333 18 5.36914 18 5.86503C18 6.36091 17.8028 6.8365 17.4518 7.18719L8.26993 16.3799C8.17984 16.4701 8.06798 16.5356 7.94516 16.57L2.94244 17.9724C2.68418 18.0448 2.4069 17.9723 2.21725 17.7829C2.0276 17.5934 1.95512 17.3165 2.02768 17.0586L3.43296 12.0633C3.46728 11.9413 3.53237 11.8301 3.62199 11.7404L12.8051 2.54754Z"></path>
    </svg>
  )
}

export function OpenWorkSpace() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18" aria-hidden="true" className="icon_90dcd5fe7a arrow-icon noFocusStyle_770b8cdd79" data-testid="icon"><path d="M9.46967 7.46967L10 8L10.5303 7.46967C10.2374 7.17678 9.76256 7.17678 9.46967 7.46967ZM10 9.06066L13.4697 12.5303C13.7626 12.8232 14.2374 12.8232 14.5303 12.5303C14.8232 12.2374 14.8232 11.7626 14.5303 11.4697L10.5303 7.46967L10 8L9.46967 7.46967L5.46967 11.4697C5.17678 11.7626 5.17678 12.2374 5.46967 12.5303C5.76256 12.8232 6.23744 12.8232 6.53033 12.5303L10 9.06066Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
  )
}

export function DuplicateSvg() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16" aria-hidden="true" aria-label="Duplicate Board" className="icon_90dcd5fe7a icon-service-icon noFocusStyle_770b8cdd79" data-testid="icon"><path d="M7.82576 3.7273C7.82576 3.58922 7.93769 3.47729 8.07576 3.47729H9.76937H13.1567C13.2184 3.47729 13.278 3.50016 13.3239 3.54147L15.94 5.89592C15.9927 5.94334 16.0227 6.01088 16.0227 6.08175V13.3637C16.0227 13.5017 15.9108 13.6137 15.7727 13.6137H8.07576C7.93769 13.6137 7.82576 13.5017 7.82576 13.3637V3.7273ZM8.07576 1.97729C7.10926 1.97729 6.32576 2.7608 6.32576 3.7273V4.88639H5.16667C4.20017 4.88639 3.41667 5.66989 3.41667 6.63639V16.2727C3.41667 17.2392 4.20018 18.0228 5.16667 18.0228H11.8939C12.8604 18.0228 13.6439 17.2392 13.6439 16.2727V15.1137H15.7727C16.7392 15.1137 17.5227 14.3302 17.5227 13.3637V6.08175C17.5227 5.58565 17.3122 5.11286 16.9434 4.78098L14.3274 2.42653C14.006 2.13732 13.589 1.97729 13.1567 1.97729H9.76937H8.07576ZM12.1439 15.1137H8.07576C7.10927 15.1137 6.32576 14.3302 6.32576 13.3637V6.38639H5.16667C5.0286 6.38639 4.91667 6.49831 4.91667 6.63639V16.2727C4.91667 16.4108 5.0286 16.5227 5.16667 16.5227H11.8939C12.032 16.5227 12.1439 16.4108 12.1439 16.2727V15.1137Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
  )
}

export function FavoritesSvg() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16" aria-hidden="true" aria-label="Add to favorites" className="icon_90dcd5fe7a icon-service-icon noFocusStyle_770b8cdd79" data-testid="icon"><path d="M10 3.90449L8.30061 7.34943C8.20168 7.5491 8.05582 7.72182 7.87554 7.85278C7.69525 7.98374 7.4859 8.06904 7.26543 8.10138L3.46267 8.65796L6.21005 11.3431C6.21018 11.3432 6.20992 11.343 6.21005 11.3431C6.37003 11.499 6.48998 11.6919 6.55878 11.9044C6.6275 12.1167 6.64348 12.3425 6.60534 12.5624C6.60528 12.5628 6.60521 12.5632 6.60514 12.5636L5.95599 16.3534L9.3594 14.563C9.5569 14.4592 9.77687 14.4048 10 14.4048C10.2231 14.4048 10.4429 14.4591 10.6404 14.5629L14.0349 16.3477L13.3857 12.5579C13.3856 12.5574 13.3856 12.5569 13.3855 12.5565C13.3474 12.3367 13.3634 12.1109 13.4321 11.8987C13.5009 11.6862 13.6204 11.4936 13.7804 11.3378C13.7805 11.3376 13.7803 11.3379 13.7804 11.3378L16.5322 8.65463L12.7353 8.10149C12.5148 8.06915 12.3048 7.98374 12.1245 7.85278C11.9442 7.72182 11.7983 7.54911 11.6994 7.34943L10 3.90449ZM10.5623 3.34904L11.2344 3.01626C11.1205 2.78619 10.9446 2.59254 10.7265 2.45714C10.5083 2.32175 10.2567 2.25 10 2.25C9.74328 2.25 9.49166 2.32175 9.27355 2.45714C9.05543 2.59254 8.87949 2.78619 8.76558 3.01626L6.98466 6.6265L2.99539 7.21037L2.99209 7.21086C2.73857 7.24912 2.50078 7.35743 2.30552 7.52359C2.11027 7.68974 1.9653 7.90714 1.88697 8.15127C1.80864 8.39539 1.80006 8.65655 1.8622 8.90529C1.92422 9.15357 2.05423 9.37963 2.23762 9.55808C2.23796 9.55842 2.2383 9.55875 2.23865 9.55909L5.11621 12.3715L4.43615 16.3417C4.43605 16.3422 4.43594 16.3428 4.43584 16.3434C4.39159 16.5975 4.41961 16.8589 4.51674 17.0979C4.6141 17.3374 4.77694 17.5446 4.98662 17.6958C5.1963 17.8471 5.44434 17.9362 5.70233 17.953C5.95874 17.9697 6.21467 17.9142 6.44115 17.793L10 15.9209L13.5498 17.7874C13.7763 17.9085 14.0322 17.964 14.2885 17.9473C14.5465 17.9305 14.7946 17.8414 15.0042 17.6901C15.2139 17.5389 15.3768 17.3317 15.4741 17.0922C15.5712 16.8532 15.5993 16.5918 15.555 16.3378C15.5549 16.3372 15.5548 16.3365 15.5547 16.3359L14.8747 12.3658L17.7568 9.55566C17.7571 9.55536 17.7574 9.55505 17.7577 9.55475C17.9412 9.37628 18.0712 9.15018 18.1332 8.90186C18.1954 8.65312 18.1868 8.39196 18.1085 8.14784C18.0301 7.90371 17.8852 7.68632 17.6899 7.52016C17.4946 7.354 17.2569 7.24569 17.0033 7.20743L13.0153 6.62645L11.2349 3.01724L10.5623 3.34904Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
  )
}

export function SidePrevSvg() {
  return (
    <svg
      lineheight="0.1em"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.5 4.5H16C16.2761 4.5 16.5 4.72386 16.5 5V15C16.5 15.2761 16.2761 15.5 16 15.5H7.5L7.5 4.5ZM6 4.5H4C3.72386 4.5 3.5 4.72386 3.5 5V15C3.5 15.2761 3.72386 15.5 4 15.5H6L6 4.5ZM2 5C2 3.89543 2.89543 3 4 3H16C17.1046 3 18 3.89543 18 5V15C18 16.1046 17.1046 17 16 17H4C2.89543 17 2 16.1046 2 15V5Z"
      ></path>
    </svg>
  )
}
