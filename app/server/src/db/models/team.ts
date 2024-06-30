import {sequelize} from "../index"
import { DataTypes } from 'sequelize'

const Team = sequelize.define('team', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})


export default { Team }