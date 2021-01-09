using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Resala_App.Domains
{
    public class Calls
    {
       int eventID { get; set; }
       int id { get; set; }
       int callerId { get; set; }
       int receiverId { get; set; }
       DateTime time { get; set; }
       DateTime timeUneditableBefore { get; set; }
       int callResultId { get; set; }
       int callTypeId { get; set; }

    }
}
