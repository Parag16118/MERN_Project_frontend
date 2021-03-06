import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';
import { SignalWifi1BarLockSharp } from '@material-ui/icons';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    flexGrow: 1,
    // background: ,
    // backgroundcolor: #e24cc,
    // backgroundimage: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 100 60'%3E%3Cg %3E%3Crect fill='%230e24cc' width='11' height='11'/%3E%3Crect fill='%230c26cd' x='10' width='11' height='11'/%3E%3Crect fill='%230928ce' y='10' width='11' height='11'/%3E%3Crect fill='%23072ace' x='20' width='11' height='11'/%3E%3Crect fill='%23042ccf' x='10' y='10' width='11' height='11'/%3E%3Crect fill='%23022ed0' y='20' width='11' height='11'/%3E%3Crect fill='%230030d1' x='30' width='11' height='11'/%3E%3Crect fill='%230032d2' x='20' y='10' width='11' height='11'/%3E%3Crect fill='%230033d2' x='10' y='20' width='11' height='11'/%3E%3Crect fill='%230035d3' y='30' width='11' height='11'/%3E%3Crect fill='%230037d4' x='40' width='11' height='11'/%3E%3Crect fill='%230038d5' x='30' y='10' width='11' height='11'/%3E%3Crect fill='%23003ad5' x='20' y='20' width='11' height='11'/%3E%3Crect fill='%23003cd6' x='10' y='30' width='11' height='11'/%3E%3Crect fill='%23003dd7' y='40' width='11' height='11'/%3E%3Crect fill='%23003fd8' x='50' width='11' height='11'/%3E%3Crect fill='%230040d8' x='40' y='10' width='11' height='11'/%3E%3Crect fill='%230042d9' x='30' y='20' width='11' height='11'/%3E%3Crect fill='%230043da' x='20' y='30' width='11' height='11'/%3E%3Crect fill='%230045da' x='10' y='40' width='11' height='11'/%3E%3Crect fill='%230046db' y='50' width='11' height='11'/%3E%3Crect fill='%230048dc' x='60' width='11' height='11'/%3E%3Crect fill='%230049dc' x='50' y='10' width='11' height='11'/%3E%3Crect fill='%23004bdd' x='40' y='20' width='11' height='11'/%3E%3Crect fill='%23004cde' x='30' y='30' width='11' height='11'/%3E%3Crect fill='%23004dde' x='20' y='40' width='11' height='11'/%3E%3Crect fill='%23004fdf' x='10' y='50' width='11' height='11'/%3E%3Crect fill='%230050df' x='70' width='11' height='11'/%3E%3Crect fill='%230052e0' x='60' y='10' width='11' height='11'/%3E%3Crect fill='%230053e1' x='50' y='20' width='11' height='11'/%3E%3Crect fill='%230054e1' x='40' y='30' width='11' height='11'/%3E%3Crect fill='%230056e2' x='30' y='40' width='11' height='11'/%3E%3Crect fill='%230057e2' x='20' y='50' width='11' height='11'/%3E%3Crect fill='%230059e3' x='80' width='11' height='11'/%3E%3Crect fill='%23005ae3' x='70' y='10' width='11' height='11'/%3E%3Crect fill='%23005be4' x='60' y='20' width='11' height='11'/%3E%3Crect fill='%23005de4' x='50' y='30' width='11' height='11'/%3E%3Crect fill='%23005ee5' x='40' y='40' width='11' height='11'/%3E%3Crect fill='%23005fe5' x='30' y='50' width='11' height='11'/%3E%3Crect fill='%230061e6' x='90' width='11' height='11'/%3E%3Crect fill='%230062e6' x='80' y='10' width='11' height='11'/%3E%3Crect fill='%230063e7' x='70' y='20' width='11' height='11'/%3E%3Crect fill='%230064e7' x='60' y='30' width='11' height='11'/%3E%3Crect fill='%230066e8' x='50' y='40' width='11' height='11'/%3E%3Crect fill='%230067e8' x='40' y='50' width='11' height='11'/%3E%3Crect fill='%230068e9' x='90' y='10' width='11' height='11'/%3E%3Crect fill='%23036ae9' x='80' y='20' width='11' height='11'/%3E%3Crect fill='%23066be9' x='70' y='30' width='11' height='11'/%3E%3Crect fill='%23096cea' x='60' y='40' width='11' height='11'/%3E%3Crect fill='%230d6dea' x='50' y='50' width='11' height='11'/%3E%3Crect fill='%23106feb' x='90' y='20' width='11' height='11'/%3E%3Crect fill='%231270eb' x='80' y='30' width='11' height='11'/%3E%3Crect fill='%231571eb' x='70' y='40' width='11' height='11'/%3E%3Crect fill='%231773ec' x='60' y='50' width='11' height='11'/%3E%3Crect fill='%231974ec' x='90' y='30' width='11' height='11'/%3E%3Crect fill='%231c75ed' x='80' y='40' width='11' height='11'/%3E%3Crect fill='%231e76ed' x='70' y='50' width='11' height='11'/%3E%3Crect fill='%232078ed' x='90' y='40' width='11' height='11'/%3E%3Crect fill='%232279ee' x='80' y='50' width='11' height='11'/%3E%3Crect fill='%23247aee' x='90' y='50' width='11' height='11'/%3E%3C/g%3E%3C/svg%3E"),
    // backgroundattachment: fixed,
    // backgroundsize: cover,
  },
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
    textDecoration: 'none',
  },
  image: {
    marginRight: '15px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));
