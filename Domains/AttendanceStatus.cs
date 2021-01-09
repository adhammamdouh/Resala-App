using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Resala_App.Domains
{
    public class AttendanceStatus
    {
        int id { get; set; }
        int volunteerId { get; set; }
        int eventId { get; set; }
        int attendStatusId { get; set; }
        string comment { get; set; }
        AttendStatus attendStatus { get; set; }
    }
}
