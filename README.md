# mailnotifier
A nodemcu project to notifiy users when the mail is delivered.

For assembling the kit, see the [HardwareAssembly](https://github.com/thinklearndo/mailnotifier/blob/main/HardwareAssembly.md)

For a 3d printable enclosure see the folder [3d_printer_files](https://github.com/thinklearndo/mailnotifier/tree/main/3d_printer_files)

Then setup the software as specified in the [software setup](https://github.com/thinklearndo/mailnotifier/blob/main/SoftwareSetup.md).

Kicad board files are in the boardfiles directory.

## Troubleshooting

To verify the nodejs server is working correctly, send a get request using a web browser to the server itself, by doing something like:
```
http://<nodejs server ip address>:3000/mailsHere
```
where ```<nodejs server ip address>``` is the address of the server running the nodejs program.

The web browser should have this kind of response:
```
mail notification received
```
And an email should be sent to the specified email address.

If the web browser doesn't get the expected response, verify the ip address of the server and that the nodejs program is running.

If an email is not sent, verify the email settings in the app.js file.

To verify the nodemcu is working correctly, go to the mailbox and remove a battery from the battery pack to power it off. Then with the mailbox door closed, insert the battery to power it on. Open the mailbox door all the way. Watch the led indicator for the nodemcu, it should blink blue to show it has turned on. Check the console for the nodejs server, there should be a log with this message:
```
mail notification received
```

If the nodemcu does not turn on, check that the tilt switch is installed correctly.

If the nodemcu does turn on but no message is logged, check the wifi settings and ip address of the firmware that was uploaded to nodemcu.
