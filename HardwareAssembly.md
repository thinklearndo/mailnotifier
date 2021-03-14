# Hardware Assembly

## Additional items needed.

Soldering iron

Solder

Nipper or wire cutter to remove excess from pins after soldering items

Super glue for mounting the tilt switch on the mailbox door

Heat gun or Hair dryer to shrink the heat shrink tubing

Needlenose pliers

3x AA batteries

## Soldering on the voltage regulators
There are two voltage regulators. One provides 3.3v to the Holtek HT68F001 microcontroller, (U2), and the other provides 3.3v to the NodeMCU, with an enable switch (U1).

![Circuit Board and voltage regulators](images/voltage_regulators.jpg)

Solder the MCP1825 voltage regulator into the U1 spot.

![U1 Orientation](images/U1_orientation.jpg)

Solder the MCP1700 voltage regulator into the U2 spot. The solder mask matches the orientation for the part.

![U2 Orientation](images/U2_orientation.jpg)

Once those are soldered on, clip off the excess.

## Soldering on the Capacitors

Solder the Capacitors into the C1, C2, C3, C4 and C5 spots. Make sure to orient them correctly. They are polarized and if put in backwards, they will explode.

There is a white line on one side of the capacitor that shows the negative pin. That pin goes into the hole that has the white half of the circle. See the following picture for an example of the capacitor inserted correctly. The arrow shows the white line on the capacitor showing the negative pin.

![capacitor orientation negative](images/capacitor_negative.jpg)

There is also a positive mark on the board next to each capacitor circle. That is where the positive pin should be inserted.

![capacitor orientation positive marking](images/capacitor_positive.jpg)

Clip off the excess.

## Soldering on the Headers for the NodeMCU

Solder the two strips of headers onto the board. Make sure the headers are flush with the board, or else it will be hard to insert the NodeMCU.

![Headers installed](images/headers_installed.jpg)

## Soldering on the battery holder

The newest board has the markings to show the power connection, J2. The positive, red wire from the battery pack goes in the left most hole of j2. It has a plus sign under it. The negative, black wire from the battery pack goes in the right hole of j2. It has a minus sign under it and white square around the hole.

![Battery hook up](images/power_orientation_fixed.jpg)

## Program and insert the NodeMCU

Upload the program for the NodeMCU according to the [software instructions](https://github.com/thinklearndo/garagedooropennotifier/blob/main/SoftwareSetup.md). Then insert it into the headers.

![Nodemcu inserted](images/nodemcu_inserted.jpg)

## Mailbox mounting

To make the tilt switch easier to mount, trim the legs of the tilt switch.

![trimmed switch](images/switch_trimmed.jpg)

Slide on the heat shrink onto each wire and solder on the wires, it doesn't matter which wire goes where.

![soldered switch](images/switch_soldered.jpg)

Use a heat gun or hair dryer to shrink the heat shrink.

![heat shrinked switch](images/switch_heatshrinked.jpg)

The tilt sensor needs to be able to detect when the mailbox door is closed and opened, otherwise it won't detect the mail being delivered. I used a type of gorilla glue to mount it mostly vertical on the bottom edge of the inside side of the mailbox door.

The legs need to be down so that the switch reads closed when the door is closed and open when the door is open.

![switch mounted](images/mounted_tilt_switch.png)

Notice the glue that is holding the wires to the door as well. Thats for strain relief, to make sure the legs of the switch don't break from the opening and closing.

What it looks like from the side:

![switch mounted front side](images/mounted_tilt_switch_side_front.jpg)

Run the wires back to the spot where the main circuit board will rest. With my vinyl mailbox holder, I stuck it in the vertical post and ran the wires in through the gaps where the horizontal post goes through.

![running wires front](images/moutned_front_outside.jpg)

![running wires side](images/running_wire_side.jpg)

![running wire into compartment](images/wire_into_compartment.jpg)

I set my circuit board and battery holder in the vertical vinyl post.

![sitting in the compartment](images/compartment.jpg)

Solder in the wires from the tilt switch into the SW1 spot. Once again it doesn't matter which wire goes in which hole.

Insert 3aa batteries and verify that it can detect the mailbox door opening and closing.


